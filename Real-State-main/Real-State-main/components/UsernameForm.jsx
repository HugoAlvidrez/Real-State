import React, { useState } from "react";
import { Link ,useRouter, useLocalSearchParams } from "expo-router";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles/formStyles";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useAuth } from "../context/AuthContext";

export default function UsernameForm() {
  const [username, setUsername] = useState("");
  const [error, setError] = useState(null);
  const { email } = useLocalSearchParams();
  const { password } = useLocalSearchParams();
  const { onRegister } = useAuth();
  const router = useRouter();

  const handleRegister = async () => {
    if (username.length < 6) {
      setError("Username must be at least 6 characters long");
    } else {
      setError(null);
      const result = await onRegister(username ,email, password);
      if (result.error) {
        setError(result.msg);
      } else {
        router.push("/login"); 
      }
    }
  };



  return (
    <View style={styles.container}>
      <Text style={styles.formText}>Register</Text>
      <Text style={styles.title}>Finally select a username.</Text>
    <View>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        placeholder="John CakeBoss"
      />
      {error && <Text style={styles.errorText}>{error}</Text>} 

      <View>
          <Link style={styles.link} href="/login">
            Sign in instead
          </Link>
          <View style={styles.centerBox}>
            <TouchableOpacity
              style={styles.button}
              onPress={handleRegister}
            >
              <AntDesign name="rightcircle" size={40} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
      
  );
}
