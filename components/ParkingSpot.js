import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, Animated, Easing, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { getDatabase, ref, onValue } from '../firebaseConfig';
import Car from '../assets/car.png';

const ParkingSpot = () => {
  const [isA1Occupied, setIsA1Occupied] = useState(false);
  const [isA2Occupied, setIsA2Occupied] = useState(false);
  const [isA3Occupied, setIsA3Occupied] = useState(false);
  const [isA4Occupied, setIsA4Occupied] = useState(false);

  // 각 이미지에 대한 애니메이션 상태 정의
  const [carAnimationA1] = useState(new Animated.Value(0));
  const [carAnimationA2] = useState(new Animated.Value(0));
  const [carAnimationA3] = useState(new Animated.Value(0));
  const [carAnimationA4] = useState(new Animated.Value(0));

  // 화면 너비 가져오기
  const screenWidth = Dimensions.get('window').width;

  useEffect(() => {
    // A1 주차공간의 상태 감지
    const db = getDatabase();
    const spotA1Ref = ref(db, 'parking_spot_state/A1');
    const spotA2Ref = ref(db, 'parking_spot_state/A2');
    const spotA3Ref = ref(db, 'parking_spot_state/A3');
    const spotA4Ref = ref(db, 'parking_spot_state/A4');

    const unsubscribeA1 = onValue(spotA1Ref, (snapshot) => {
      const isOccupied = snapshot.val();
      setIsA1Occupied(isOccupied);
      // 애니메이션 제어
      Animated.timing(carAnimationA1, {
        toValue: isOccupied ? 1 : 0,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start();
    });

    const unsubscribeA2 = onValue(spotA2Ref, (snapshot) => {
      const isOccupied = snapshot.val();
      setIsA2Occupied(isOccupied);
      // 애니메이션 제어
      Animated.timing(carAnimationA2, {
        toValue: isOccupied ? 1 : 0,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start();
    });

    const unsubscribeA3 = onValue(spotA3Ref, (snapshot) => {
      const isOccupied = snapshot.val();
      setIsA3Occupied(isOccupied);
      // 애니메이션 제어
      Animated.timing(carAnimationA3, {
        toValue: isOccupied ? 1 : 0,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start();
    });

    const unsubscribeA4 = onValue(spotA4Ref, (snapshot) => {
      const isOccupied = snapshot.val();
      setIsA4Occupied(isOccupied);
      // 애니메이션 제어
      Animated.timing(carAnimationA4, {
        toValue: isOccupied ? 1 : 0,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start();
    });

    return () => {
      unsubscribeA1();
      unsubscribeA2();
      unsubscribeA3();
      unsubscribeA4();
    };
  }, []); // 빈 배열을 전달하여 컴포넌트가 처음 렌더링될 때 한 번만 실행되도록 함

  return (
    <View style={styles.container}>
      <Text style={styles.title}>주차 현황</Text>

      {/* 위쪽에 두 개의 박스 */}
      <View style={styles.boxContainer}>
        <View style={[styles.box, styles.topBox]}>
          <Animated.Image
            source={Car}
            style={[
              styles.image,
              {
                transform: [
                  {
                    translateX: carAnimationA1.interpolate({
                      inputRange: [0, 1],
                      outputRange: [-screenWidth, 0],
                    }),
                  },
                ],
              },
            ]}
          />
          <Text style={styles.boxText}>A1</Text>
        </View>
        <View style={[styles.box, styles.topBox]}>
          <Animated.Image
            source={Car}
            style={[
              styles.image,
              {
                transform: [
                  {
                    translateX: carAnimationA2.interpolate({
                      inputRange: [0, 1],
                      outputRange: [screenWidth, 0],
                    }),
                  },
                ],
              },
            ]}
          />
          <Text style={styles.boxText}>A2</Text>
        </View>
      </View>

      {/* 아래쪽에 두 개의 박스 */}
      <View style={styles.boxContainer}>
        <View style={[styles.box, styles.bottomBox]}>
          <Animated.Image
            source={Car}
            style={[
              styles.image,
              {
                transform: [
                  {
                    translateX: carAnimationA3.interpolate({
                      inputRange: [0, 1],
                      outputRange: [-screenWidth, 0],
                    }),
                  },
                ],
              },
            ]}
          />
          <Text style={styles.boxText}>A3</Text>
        </View>
        <View style={[styles.box, styles.bottomBox]}>
          <Animated.Image
            source={Car}
            style={[
              styles.image,
              {
                transform: [
                  {
                    translateX: carAnimationA4.interpolate({
                      inputRange: [0, 1],
                      outputRange: [screenWidth, 0],
                    }),
                  },
                ],
              },
            ]}
          />
          <Text style={styles.boxText}>A4</Text>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'lightblue',
  },
  boxContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  box: {
    width: 150,
    height: 200,
    marginHorizontal: 10,
    backgroundColor: '#e0e0e0',
    borderWidth: 2,
    borderColor: 'lightblue',
    justifyContent: 'flex-end', // 텍스트를 아래에 정렬
    paddingBottom: 10, // 텍스트와 상자의 간격
  },
  boxText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
  topBox: {
    marginTop: 20,
  },
  bottomBox: {
    marginBottom: 20,
  },
  image: {
    width: 130, // 이미지의 너비
    height: 130, // 이미지의 높이
    position: 'absolute', // 절대 위치
    top: 25, // 상단에 위치
    left: 7, // 왼쪽에 위치
  },
});

export default ParkingSpot;
