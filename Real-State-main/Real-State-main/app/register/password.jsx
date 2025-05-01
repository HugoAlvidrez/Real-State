import React from "react";
import { StyleSheet, View, Button} from 'react-native';
import PasswordForm from "../../components/PasswordForm";

export default function Register(){
    return(
        <View style={styles.container}>
            <PasswordForm/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f3a4e2',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });