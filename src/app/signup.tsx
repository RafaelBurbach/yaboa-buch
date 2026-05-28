import { Link, router } from "expo-router"
import { useState } from "react"
import { Alert, Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from "react-native"

import { Button } from "../components/button"
import { Input } from "../components/input"
import { useAuth } from "../context/AuthContext"

export default function Signup() {
  const { signUp } = useAuth()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  function handleSignUp() {
    if (!name.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
      return Alert.alert("Cadastro", "Preencha todos os campos.")
    }

    if (password !== confirmPassword) {
      return Alert.alert("Cadastro", "As senhas precisam ser iguais.")
    }

    signUp({ name, email, password })
    router.replace("/login")
  }

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.select({ ios: "padding", android: undefined })}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Image source={require("../assets/img/yaboa-cropped.png")} style={styles.logo} />

          <View style={styles.card}>
            <Text style={styles.title}>Cadastrar</Text>
            <Text style={styles.subtitle}>Crie sua conta para organizar eventos.</Text>

            <View style={styles.form}>
              <Input placeholder="Nome" value={name} onChangeText={setName} />
              <Input placeholder="E-mail" keyboardType="email-address" autoCapitalize="none" value={email} onChangeText={setEmail} />
              <Input placeholder="Senha" secureTextEntry value={password} onChangeText={setPassword} />
              <Input placeholder="Confirmar senha" secureTextEntry value={confirmPassword} onChangeText={setConfirmPassword} />
              <Button label="Cadastrar" onPress={handleSignUp} />
            </View>

            <Text style={styles.footerText}>
              Já tem conta? <Link href="/login" style={styles.footerLink}>Entre aqui.</Link>
            </Text>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFEDD5",
    padding: 28,
    justifyContent: "center",
  },
  logo: {
    width: 230,
    height: 135,
    alignSelf: "center",
    resizeMode: "contain",
    marginBottom: 28,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 28,
    padding: 24,
    shadowColor: "#9A3412",
    shadowOpacity: 0.12,
    shadowRadius: 16,
    elevation: 4,
  },
  title: {
    fontSize: 32,
    fontWeight: "900",
    color: "#431407",
  },
  subtitle: {
    fontSize: 16,
    color: "#7C2D12",
    marginTop: 6,
  },
  form: {
    marginTop: 24,
    gap: 12,
  },
  footerText: {
    textAlign: "center",
    marginTop: 24,
    color: "#7C2D12",
  },
  footerLink: {
    color: "#EA580C",
    fontWeight: "800",
  },
})
