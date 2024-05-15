import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Navigation 사용을 위한 import

export default function ClientMenu() {
  const navigation = useNavigation(); // Navigation 객체 생성

  const handleSearchButtonClick = () => {
    navigation.navigate('Search'); // Search 페이지로 이동
  };
  const handleSearchButtonClick2 = () => {
    navigation.navigate('ParkingSpot'); // ParkingSpot 페이지로 이동
  };

  return (
    <View style={[styles.container, { backgroundColor: 'white' }]}>
      <Text style={styles.title}>사용자 메뉴</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.button}
          onPress={handleSearchButtonClick2}>
          <Text style={styles.buttonText}>주차 공간 확인</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.button}
          onPress={handleSearchButtonClick} // "내 차량 위치 찾기" 버튼 클릭 시 이벤트 핸들러 호출
        >
          <Text style={styles.buttonText}>내 차량 위치 찾기</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 100,
    color: 'lightblue',
  },
  buttonContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    width: 250,
    height: 70,
    justifyContent: 'center', // 버튼 내에서 수직으로 가운데 정렬합니다.
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});

