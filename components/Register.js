import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { db } from '../firebaseConfig';
import { doc, updateDoc } from 'firebase/firestore';

export default function Register() {
  const [apartment, setApartment] = useState('');
  const [carNumber, setCarNumber] = useState('');

  const handleApartmentChange = (text) => {
    setApartment(text);
  };

  const handleCarNumberChange = (text) => {
    setCarNumber(text);
  };

  const handleRegistration = async () => {
    try {
      const carLicenseDocRef = doc(db, 'registered', 'car_license');
      await updateDoc(carLicenseDocRef, { [apartment]: carNumber });
      Alert.alert('등록 성공', `아파트 동: ${apartment}, 차량번호: ${carNumber}`);
      setApartment(''); // 입력 후 입력 필드 초기화
      setCarNumber(''); // 입력 후 입력 필드 초기화
    } catch (error) {
      console.error('차량 정보 등록 중 오류가 발생했습니다:', error);
      Alert.alert('등록 실패', '차량 정보 등록 중 오류가 발생했습니다.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>등록<Text style={styles.title2}>차량</Text> 등록</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleApartmentChange}
        value={apartment}
        placeholder="아파트 호수 입력"
        placeholderTextColor="lightblue"
      />
      <TextInput
        style={styles.input}
        onChangeText={handleCarNumberChange}
        value={carNumber}
        placeholder="차량번호 입력"
        placeholderTextColor="lightblue"
      />
      <TouchableOpacity style={styles.button} onPress={handleRegistration}>
        <Text style={styles.buttonText}>등록</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 50,
    color: 'lightblue',
    fontFamily: 'BlackHanSans_400Regular'
  },
  title2: {
    fontSize: 70,
    fontWeight: 'bold',
    marginBottom: 50,
    color: 'lightblue',
    fontFamily: 'BlackHanSans_400Regular'
  },
  input: {
    height: 50,
    width: 250,
    borderColor: 'lightblue',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    color: 'black',
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});