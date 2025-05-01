import React from "react";
import { StyleSheet, View, Button} from 'react-native';
import RegisterForm from "../../components/RegisterForm";

export default function Register(){
    return(
        <View style={styles.container}>
            <RegisterForm/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });