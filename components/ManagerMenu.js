import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ManagerMenu({ navigation }) {
  
  const handleAvailabilityPress = () => {
    navigation.navigate('Availability'); 
  };

  const handleRegisterPress = () => {
    navigation.navigate('Register'); // Register.js 페이지로 이동
  };

  const handleParkingRegPress = () => {
    navigation.navigate('ParkingReg'); // Register.js 페이지로 이동
  };

  return (
    <View style={[styles.container, { backgroundColor: 'white' }]}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleParkingRegPress}>
        <Image 
           source={require('../assets/park5.png')} 
           style={{ width: 150, height: 120 , color: 'white', marginBottom: 15 }} // 원하는 너비와 높이로 설정
           />
          <Text style={styles.buttonText}>등록/비등록 주차상태</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleAvailabilityPress}>
        <Image 
           source={require('../assets/per.png')} 
           style={{ width: 120, height: 120 , color: 'white', marginBottom: 15 }} // 원하는 너비와 높이로 설정
           />
          <Text style={styles.buttonText}>주차장 현황</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleRegisterPress}>
        <Image 
           source={require('../assets/reg.png')} 
           style={{ width: 120, height: 120 , color: 'white', marginBottom: 15, left: 12 }} // 원하는 너비와 높이로 설정
           />
          <Text style={styles.buttonText}>등록차량 등록</Text>
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
    backgroundColor: '#C9E7ED',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    width: 250,
    height: 200,
    justifyContent: 'center', // 버튼 내에서 수직으로 가운데 정렬합니다.
    alignItems: 'center',
    borderColor: 'lightblue',
    borderWidth: 2
  },
  buttonText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#333333',
    textAlign: 'center',
    fontFamily: 'BlackHanSans_400Regular'
  },
});
