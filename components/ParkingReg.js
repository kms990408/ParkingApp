import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, Animated, Easing, Dimensions, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { getDatabase, ref, onValue } from '../firebaseConfig';
import Car from '../assets/car.png';
import ParkingBackground from '../assets/parking.png'; // 배경 이미지 경로

const ParkingReg = () => {
  const [isA1Occupied, setIsA1Occupied] = useState(false);
  const [isA2Occupied, setIsA2Occupied] = useState(false);
  const [isA3Occupied, setIsA3Occupied] = useState(false);
  const [isA4Occupied, setIsA4Occupied] = useState(false);

  const [isA1Registered, setIsA1Registered] = useState(false);
  const [isA2Registered, setIsA2Registered] = useState(false);
  const [isA3Registered, setIsA3Registered] = useState(false);
  const [isA4Registered, setIsA4Registered] = useState(false);

  // 각 이미지에 대한 애니메이션 상태 정의
  const [carAnimationA1] = useState(new Animated.Value(0));
  const [carAnimationA2] = useState(new Animated.Value(0));
  const [carAnimationA3] = useState(new Animated.Value(0));
  const [carAnimationA4] = useState(new Animated.Value(0));

  // 화면 너비 가져오기
  const screenWidth = Dimensions.get('window').width;

  useEffect(() => {
    const db = getDatabase();
    const spotA1Ref = ref(db, 'parking_spot_state/A1');
    const spotA2Ref = ref(db, 'parking_spot_state/A2');
    const spotA3Ref = ref(db, 'parking_spot_state/A3');
    const spotA4Ref = ref(db, 'parking_spot_state/A4');

    const spotA1Reg = ref(db, 'parking_spot_registered/A1');
    const spotA2Reg = ref(db, 'parking_spot_registered/A2');
    const spotA3Reg = ref(db, 'parking_spot_registered/A3');
    const spotA4Reg = ref(db, 'parking_spot_registered/A4');

    const unsubscribeA1 = onValue(spotA1Ref, (snapshot) => {
      const isOccupied = snapshot.val();
      setIsA1Occupied(isOccupied);
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
      Animated.timing(carAnimationA4, {
        toValue: isOccupied ? 1 : 0,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start();
    });

    const unsubscribeRegA1 = onValue(spotA1Reg, (snapshot) => {
      setIsA1Registered(snapshot.val());
    });

    const unsubscribeRegA2 = onValue(spotA2Reg, (snapshot) => {
      setIsA2Registered(snapshot.val());
    });

    const unsubscribeRegA3 = onValue(spotA3Reg, (snapshot) => {
      setIsA3Registered(snapshot.val());
    });

    const unsubscribeRegA4 = onValue(spotA4Reg, (snapshot) => {
      setIsA4Registered(snapshot.val());
    });

    return () => {
      unsubscribeA1();
      unsubscribeA2();
      unsubscribeA3();
      unsubscribeA4();
      unsubscribeRegA1();
      unsubscribeRegA2();
      unsubscribeRegA3();
      unsubscribeRegA4();
    };
  }, []); 

  const getBoxStyle = (isOccupied, isRegistered) => {
    if (isOccupied && isRegistered) {
      return [styles.box, styles.greenBox];
    } else if (isOccupied && !isRegistered) {
      return [styles.box, styles.redBox];
    } else {
      return styles.box;
    }
  };

  const getBoxText = (isOccupied, isRegistered) => {
    if (isOccupied && isRegistered) {
      return "등록 차량";
    } else if (isOccupied && !isRegistered) {
      return "비등록 차량";
    } else {
      return "빈 구역";
    }
  };

  return (
    <ImageBackground source={ParkingBackground} style={styles.backgroundImage} imageStyle={{ opacity: 0.3 }}>
      <View style={styles.container}>
        <Text style={styles.title}>A동 주차 현황</Text>

        <View style={styles.boxContainer}>
          <View style={getBoxStyle(isA1Occupied, isA1Registered)}>
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
            <View style={styles.regBox}>
              <Text style={styles.regBoxText}>{getBoxText(isA1Occupied, isA1Registered)}</Text>
            </View>
            <Text style={styles.boxText}>A1</Text>
          </View>
          
          <View style={getBoxStyle(isA2Occupied, isA2Registered)}>
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
            <View style={styles.regBox}>
              <Text style={styles.regBoxText}>{getBoxText(isA2Occupied, isA2Registered)}</Text>
            </View>
            <Text style={styles.boxText}>A2</Text>
          </View>
        </View>

        <View style={styles.boxContainer}>
          <View style={getBoxStyle(isA3Occupied, isA3Registered)}>
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
            <View style={styles.regBox}>
              <Text style={styles.regBoxText}>{getBoxText(isA3Occupied, isA3Registered)}</Text>
            </View>
            <Text style={styles.boxText}>A3</Text>
          </View>
          <View style={getBoxStyle(isA4Occupied, isA4Registered)}>
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
            <View style={styles.regBox}>
              <Text style={styles.regBoxText}>{getBoxText(isA4Occupied, isA4Registered)}</Text>
            </View>
            <Text style={styles.boxText}>A4</Text>
          </View>
        </View>

        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333333',
    fontFamily: 'BlackHanSans_400Regular'
  },
  boxContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  box: {
    width: 150,
    height: 200,
    marginHorizontal: 10,
    backgroundColor: 'gray',
    borderWidth: 2,
    borderColor: 'black',
    justifyContent: 'flex-end', // 텍스트를 아래에 정렬
    paddingBottom: 10, // 텍스트와 상자의 간격
  },
  greenBox: {
    backgroundColor: '#41AA3A',
  },
  redBox: {
    backgroundColor: '#EA484B',
  },
  boxText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'BlackHanSans_400Regular'
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
    top: -10, // 상단에 위치
    left: 7, // 왼쪽에 위치
  },
  regBox: {
    width: 130,
    height: 30,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'white',
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    left: 7.5,
    bottom: 10
  },
  regBoxText: {
    color: '#333333',
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'BlackHanSans_400Regular',
    marginTop: 3
  }
});

export default ParkingReg;

