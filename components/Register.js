import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function Register() {
  const [apartment, setApartment] = useState('');
  const [carNumber, setCarNumber] = useState('');

  const handleApartmentChange = (text) => {
    setApartment(text);
  };

  const handleCarNumberChange = (text) => {
    setCarNumber(text);
  };

  const handleRegistration = () => {
    // 등록 처리 로직 추가
    console.log(`아파트 동: ${apartment}, 차량번호: ${carNumber}이(가) 등록되었습니다.`);
  };

  return (
    <View style={[styles.container,{ backgroundColor: 'white' }]}>
      <Text style={styles.title}>등록차량 등록</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleApartmentChange}
        value={apartment}
        placeholder="아파트 동 입력"
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
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 50,
    color: 'lightblue',
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
