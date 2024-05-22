import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, StatusBar, ImageBackground } from 'react-native';
import { getDatabase, ref, onValue } from '../firebaseConfig';
import { PieChart } from "react-native-gifted-charts";
import ParkingBackground from '../assets/parking.png';

const Availability = () => {
  const [parkingData, setParkingData] = useState({A1: false, A2: false, A3: false, A4: false});

  useEffect(() => {
    const db = getDatabase();
    const parkingRef = ref(db, 'parking_spot_state');
    const unsubscribe = onValue(parkingRef, (snapshot) => {
      setParkingData(snapshot.val());
    });

    return () => unsubscribe();
  }, []);

  // 사용 가능한 주차 공간 수 계산
  const availableSpots = parkingData ? Object.values(parkingData).filter(state => !state).length : 0;
  const totalSpots = parkingData ? Object.keys(parkingData).length : 4; // 데이터가 로드되지 않았다면 4개로 가정
  const usedSpots = totalSpots - availableSpots;

  const pieData = [
    {
      value: availableSpots,
      color: 'rgba(131, 167, 234, 1)',
      label: `사용 가능 (${((availableSpots / totalSpots) * 100).toFixed(1)}%)`,
    },
    {
      value: usedSpots,
      color: 'rgba(255, 99, 132, 1)',
      label: `사용 중 (${((usedSpots / totalSpots) * 100).toFixed(1)}%)`,
    },
  ];

  const usageRate = (usedSpots / totalSpots) * 100;
  let statusBoxStyle = styles.stateBox;
  let statusText = '';

  if (usageRate <= 33) {
    statusBoxStyle = { ...styles.stateBox, backgroundColor: 'green' };
    statusText = '원활';
  } else if (usageRate > 33 && usageRate <= 66) {
    statusBoxStyle = { ...styles.stateBox, backgroundColor: 'rgba(131, 167, 234, 1)' };
    statusText = '정상';
  } else {
    statusBoxStyle = { ...styles.stateBox, backgroundColor: 'rgba(255, 99, 132, 1)' };
    statusText = '혼잡';
  }

  return (
    <ImageBackground source={ParkingBackground} style={styles.backgroundImage} imageStyle={{ opacity: 0.3 }}>
      <View style={styles.container}>
        <Text style={styles.title}>A동 주차장 현황</Text>
        <StatusBar style="auto" />
        <PieChart
          data={pieData}
          donut
          innerRadius={60}
          radius={150} // 차트 크기를 조정
          labelStyle={{ fontSize: 14, color: 'black' }} // 라벨 스타일 지정
          labelRadius={80} // 라벨이 표시될 반경 조정
          centerLabelComponent={() => {
            return (
              <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'black', fontFamily: 'BlackHanSans_400Regular' }}>{availableSpots}/{totalSpots}</Text>
                <Text style={{ fontSize: 20, color: 'grey', fontFamily: 'BlackHanSans_400Regular' }}>총 주차대수</Text>
              </View>
            );
          }}
        />
        <View style={statusBoxStyle}>
          <Text style={styles.stateBoxText}>{statusText}</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 100,
    marginTop: -150,
    color: '#333333',
    fontFamily: 'BlackHanSans_400Regular'
  },
  spotsText: {
    fontSize: 18,
    color: 'lightblue',
    fontFamily: 'BlackHanSans_400Regular'
  },
  stateBox: {
    width: 200,
    height: 100,
    borderWidth: 0,
    borderRadius: 20,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: -130,
  },
  stateBoxText: {
    fontSize: 50,
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'BlackHanSans_400Regular',
    marginTop: 8
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
});

export default Availability;
