import React from "react";
import { StyleSheet, View, Button} from 'react-native';
import LoginForm from "../../components/LoginForm";

export default function Register(){
    return(
        <View style={styles.container}>
            <LoginForm/>
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