import React, { useState } from "react";
import {Link, useRouter, useLocalSearchParams } from "expo-router";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles/formStyles";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function PasswordForm() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();
  const { email } = useLocalSearchParams(); // Get email from previous step (Hola javier)


  const handleNext = () => {
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
    } else {
      setError(null);
      router.push({ pathname: "/register/username", params: { email, password } }); // Pass email to next step (hola javier)
    }
  };

  return (
    <View style={styles.passwordContainer}>
      <Text style={styles.passwordFormText}>Register</Text>
      <Text style={styles.passwordTitle}>Please enter a password.</Text>

      <View>
      <TextInput
        style={styles.passwordInput}
        value={password}
        onChangeText={setPassword}
        placeholder="your password"
        placeholderTextColor='#fff'
        secureTextEntry={true}
      />
      {error ? <Text style={styles.errorText}>{String(error)}</Text> : null}
      <View>
          <Link style={styles.passwordLink} href="/login">
            Sign in instead
          </Link>
          <View style={styles.centerBox}>
            <TouchableOpacity
              style={styles.passwordButton}
              onPress={handleNext}
            >
              <AntDesign name="rightcircle" size={40} color='#f3a4e2' />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
