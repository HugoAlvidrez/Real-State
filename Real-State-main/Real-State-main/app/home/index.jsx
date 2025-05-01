import React from "react";
import { StyleSheet, View, Text} from 'react-native';
import ProtectedRoute from "../../context/ProtectedRoute";
import { useAuth } from "../../context/AuthContext";

export default function Home(){
    const { user } = useAuth();
    return(
        <ProtectedRoute>
            <View style={styles.container}>
                <Text>HOLAAAA {user.data.username}</Text>
                <Text>EMAIL:  {user.data.email}</Text>
                <Text>-----------------------------------------</Text>
                <Text>Token:  {user.token}</Text>
            </View>
        </ProtectedRoute>
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