import { Stack } from "expo-router"

import { AuthProvider } from "../context/AuthContext"

export default function Layout() {
  return (
    <AuthProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="login" />
        <Stack.Screen name="signup" />
        <Stack.Screen name="home" />
        <Stack.Screen name="sobre" />
        <Stack.Screen name="contato" />
        <Stack.Screen name="perfil" />
      </Stack>
    </AuthProvider>
  )
}
