import React from "react";
import { StyleSheet, View, Button} from 'react-native';
import UsernameForm from "../../components/UsernameForm";

export default function Register(){
    return(
        <View style={styles.container}>
            <UsernameForm/>
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