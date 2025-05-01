import React, { useState } from "react";
import { Link ,useRouter } from "expo-router";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles/formStyles";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleNext = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // valida el email si esta bien escrito (hola javier)
    if (!emailRegex.test(email)) {
      setError("Invalid email address");
    } else {
      setError(null);
      router.push({ pathname: "/register/password", params: { email } }); // Pass email to next step (hola javier)
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.formText}>Register</Text>
      <Text style={styles.title}>Please enter an email.</Text>
    <View>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="someone@example.com"
      />
      {error && <Text style={styles.errorText}>{error}</Text>} 

      <View>
          <Text style={styles.formText}>or</Text>
          <TouchableOpacity style={styles.provider}>
            <Text style={styles.providerText}>
              <AntDesign name="google" size={24} color="white" /> Continue with
              Google
            </Text>
          </TouchableOpacity>
          <Link style={styles.link} href="/login">
            Sign in instead
          </Link>
          <View style={styles.centerBox}>
            <TouchableOpacity
              style={styles.button}
              onPress={handleNext}
            >
              <AntDesign name="rightcircle" size={40} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
      
  );
}
