import React from 'react';

import { Stack, useRouter } from 'expo-router';
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function App() {

  const router = useRouter();

  return (
    <View style={styles.container}>
       <ImageBackground source={require('../assets/welcum.jpg')} style={{width: 500, height: 910}} resizeMode="expand">
       <View style={styles.infoContainer}>
        <Text style={styles.title}>Hello!</Text>
        <Text style={styles.content}>
          Special moments have special food
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => router.push('/register')}>
        <AntDesign name="rightcircle" size={40} color="white" />
        </TouchableOpacity>
        </View>
       </ImageBackground>  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoContainer: {
    //backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'top',
  },
  title:{
    fontSize: 80,
    color: "#f3a4e2",
    marginTop: 170,
    fontWeight: "bold"
  },
  content:{
    backgroundColor: '#f3a4e2',
    padding: 7,
    borderRadius: 10,
    fontSize: 20,
    color: "#fff",
    marginTop: 10,
  },
  button: {
    backgroundColor: '#f3a4e2',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 60,
    marginTop: 400
  }
 
});
