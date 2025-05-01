import { Stack } from "expo-router";
import { AuthProvider } from "../context/AuthContext";
export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack>
        <Stack.Screen
          options={{
            headerShown: false,
            animation: "slide_from_right",
          }}
          name="index"
        />
        <Stack.Screen
          options={{
            headerShown: false,
            animation: "slide_from_right",
          }}
          name="register/index"
        />
        <Stack.Screen
          options={{
            headerShown: false,
            animation: "slide_from_right",
          }}
          name="login/index"
        />
        <Stack.Screen
          options={{
            headerShown: false,
            animation: "slide_from_right",
          }}
          name="register/password"
        />
        <Stack.Screen
          options={{
            headerShown: false,
            animation: "slide_from_right",
          }}
          name="register/username"
        />
        <Stack.Screen
          options={{
            headerShown: false,
            animation: "slide_from_right",
          }}
          name="home/index"
        />
      </Stack>
    </AuthProvider>
  );
}
