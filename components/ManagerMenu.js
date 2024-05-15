import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function ManagerMenu({ navigation }) {
  const handleRegisterCarPress = () => {
    navigation.navigate('Register'); // Register.js 페이지로 이동
  };

  return (
    <View style={[styles.container, { backgroundColor: 'white' }]}>
      <Text style={styles.title}>관리자 메뉴</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>등록/비등록 주차상태</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>주차가능 구역 확인</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleRegisterCarPress}>
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
