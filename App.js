import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Modal, TextInput, Alert, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ClientMenu from './components/ClientMenu';
import ManagerMenu from './components/ManagerMenu'; // Import the ManagerMenu component
import Search from './components/Search'; // Search 컴포넌트를 import
import ParkingSpot from './components/ParkingSpot';
import { Ionicons } from '@expo/vector-icons';
import Register from './components/Register';
import Availability from './components/Availability';
import ParkingReg from './components/ParkingReg';
import AppLoading from 'expo-app-loading';
import { useFonts, BlackHanSans_400Regular } from '@expo-google-fonts/black-han-sans';

const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    BlackHanSans_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'lightblue', // 배경색 설정
            borderRadius: 10,
            height: 110,
          },
          headerTintColor: 'white', // 글자색 설정
          headerTitleStyle: {
            fontSize: 25, // 글자 크기 설정
            fontFamily: 'BlackHanSans_400Regular'
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation }) => ({
            title: '',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.openDrawer({ DrawerBar })}>
                <Ionicons name="menu" size={27} color="white" style={{ marginLeft: 10 }} />
              </TouchableOpacity>
            ),
            headerTitle: () => (
              <View style={styles.searchContainer}>
                <TextInput
                  style={styles.searchInput}
                  placeholder="찾으시는 서비스를 검색하세요"
                  placeholderTextColor="lightgray"
                  // 검색 기능에 대한 설정 추가 가능
                />
              </View>
            ),
            headerRight: () => (
              <TouchableOpacity onPress={() => console.log('검색')}>
                <Ionicons name="search" size={24} color="white" style={{ marginRight: 15 }} />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="ClientMenu"
          component={ClientMenu}
          options={({ navigation }) => ({
            title: '사용자 메뉴',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={27} color="white" style={{ marginLeft: 10 }} />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Ionicons name="home" size={27} color="white" style={{ marginRight: 10 }} />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={({ navigation }) => ({
            title: '내 차량 위치 찾기',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={27} color="white" style={{ marginLeft: 10 }} />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Ionicons name="home" size={27} color="white" style={{ marginRight: 10 }} />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="ManagerMenu" // 추가된 Screen 이름
          component={ManagerMenu} // ManagerMenu 컴포넌트를 연결
          options={({ navigation }) => ({
            title: '관리자 메뉴',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={27} color="white" style={{ marginLeft: 10 }} />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Ionicons name="home" size={27} color="white" style={{ marginRight: 10 }} />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="ParkingSpot" // 추가된 Screen 이름
          component={ParkingSpot} // ManagerMenu 컴포넌트를 연결
          options={({ navigation }) => ({
            title: '주차 현황',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={27} color="white" style={{ marginLeft: 10 }} />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Ionicons name="home" size={27} color="white" style={{ marginRight: 10 }} />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="Register" // 추가된 Screen 이름
          component={Register} // ManagerMenu 컴포넌트를 연결
          options={({ navigation }) => ({
            title: '등록차량 등록',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={27} color="white" style={{ marginLeft: 10 }} />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Ionicons name="home" size={27} color="white" style={{ marginRight: 10 }} />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="Availability" // 스크린 이름
          component={Availability} // 연결할 컴포넌트
          options={({ navigation}) => ({
            title: '주차장 현황',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={27} color="white" style={{ marginLeft: 10 }} />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Ionicons name="home" size={27} color="white" style={{ marginRight: 10 }} />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="ParkingReg" // 스크린 이름
          component={ParkingReg} // 연결할 컴포넌트
          options={({ navigation}) => ({
            title: '등록/비등록 주차현황',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={27} color="white" style={{ marginLeft: 10 }} />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Ionicons name="home" size={27} color="white" style={{ marginRight: 10 }} />
              </TouchableOpacity>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation }) {
  const [isModalVisible, setModalVisible] = useState(false);
  const [password, setPassword] = useState('');
  const secretPassword = '123456789'; // 설정한 비밀번호

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handlePasswordSubmit = () => {
    if (password === secretPassword) {
      toggleModal();
      navigation.navigate('ManagerMenu'); // 비밀번호가 일치하면 ManagerMenu 페이지로 이동
    } else {
      Alert.alert('Error', '비밀번호가 일치하지 않습니다.');
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: 'white' }]}>
      <Image
        source={require('./assets/logo.jpeg')}
        style={{ width: 300, height: 300, top: -100, marginBottom: -50 }} // 원하는 너비와 높이로 설정
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('ClientMenu')} // ClientMenu로 이동
        >
          <Image
            source={require('./assets/apt.png')}
            style={{ width: 100, height: 100, left: 9, top: 10, color: 'white' }} // 원하는 너비와 높이로 설정
          />
          <Text></Text>
          <Text style={styles.buttonText}>입주민</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={toggleModal} // 모달 토글
        >
          <Image
            source={require('./assets/top.png')}
            style={{ width: 100, height: 100, left: 9, top: 10, color: 'white' }} // 원하는 너비와 높이로 설정
          />
          <Text></Text>
          <Text style={styles.buttonText}>관리자</Text>
        </TouchableOpacity>
      </View>
      <Modal visible={isModalVisible} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>비밀번호 입력</Text>
            <TextInput
              style={styles.input}
              placeholder="비밀번호를 입력하세요."
              secureTextEntry
              onChangeText={setPassword}
            />
            <TouchableOpacity style={styles.modalButton} onPress={handlePasswordSubmit}>
              <Text style={styles.modalButtonText}>확인</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#C9E7ED',
    padding: 15,
    marginHorizontal: 10,
    borderRadius: 10,
    height: 200,
    width: 150,
    borderColor: 'lightblue',
    borderWidth: 3,
  },
  buttonText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333333',
    textAlign: 'center',
    padding: 10,
    fontFamily: 'BlackHanSans_400Regular', // 폰트 적용
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // 반투명 배경
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '100%',
  },
  modalButton: {
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 5,
  },
  modalButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  searchContainer: {
    backgroundColor: 'white',
    width: 250,
    height: 35,
    marginLeft: -7,
  },
  searchInput: {
    textAlign: 'center',
    fontSize: 15,
    marginTop: 8,
  },
  layout: {
    borderColor: 'lightblue',
    borderWidth: 2,
  },
});
