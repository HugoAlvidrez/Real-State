import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import styles from "./styles/formStyles";
import { useAuth } from "../context/AuthContext"; 
import { useRouter } from "expo-router";


export default function LoginForm() {
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
  const { onLogin } = useAuth(); 
  const router = useRouter();

  const handleLogin = async () => {
    const response = await onLogin(email, password); 
    if (response.error) {
      console.error(response.msg); 
    } else {
      console.log("Login successful!");
      router.push('/home') /// aqwui lo mand aal feed
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title2}>Welcome Back!</Text>

      <View>
        <Text style={styles.formText}>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={setEmail} 
          value={email} 
          placeholder="someone@mosquera.dev"
          autoCapitalize="none"
        />
        <Text style={styles.formText}>Password</Text>
        <TextInput
          style={styles.input}
          onChangeText={setPassword} 
          value={password} 
          secureTextEntry={true}
          placeholder="Your password here"
        />
        <TouchableOpacity style={styles.provider} onPress={handleLogin}>
          <View style={styles.centerBox}>
            <Text style={styles.providerText}>Sign In</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.centerBox}>
          <Text style={styles.formText2}>or</Text>
        </View>
        <TouchableOpacity style={styles.provider}>
          <View style={styles.centerBox}>
            <Text style={styles.providerText}>
              <AntDesign name="google" size={24} color="white" /> Sign in with
              Google
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
