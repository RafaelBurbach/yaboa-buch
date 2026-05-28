import { Link, router } from "expo-router"
import { Image, ScrollView, StyleSheet, Text, View } from "react-native"

import { BottomNav } from "../components/bottom-nav"
import { Button } from "../components/button"
import { useAuth } from "../context/AuthContext"

export default function Perfil() {
  const { user, signOut } = useAuth()

  function handleLogout() {
    signOut()
    router.replace("/login")
  }

  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Image source={require("../assets/img/yaboa-cropped.png")} style={styles.logo} />

        <View style={styles.card}>
          <Text style={styles.title}>Perfil</Text>

          <View style={styles.infoBox}>
            <Text style={styles.label}>Nome Cadastrado</Text>
            <Text style={styles.value}>{user?.name || ""}</Text>
          </View>

          <View style={styles.infoBox}>
            <Text style={styles.label}>E-mail cadastrado</Text>
            <Text style={styles.value}>{user?.email || ""}</Text>
          </View>

          <View style={styles.actions}>
            <Link href="/home" asChild>
              <Button label="Voltar para Home" style={styles.homeButton} />
            </Link>
            <Button label="Sair" style={styles.logoutButton} onPress={handleLogout} />
          </View>
        </View>
      </ScrollView>

      <BottomNav />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#FFEDD5",
  },
  content: {
    flexGrow: 1,
    padding: 28,
    paddingBottom: 120,
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
  },
  title: {
    fontSize: 32,
    fontWeight: "900",
    color: "#431407",
    marginBottom: 18,
  },
  infoBox: {
    backgroundColor: "#FFF7ED",
    borderRadius: 20,
    borderColor: "#FDBA74",
    borderWidth: 1,
    padding: 14,
    marginBottom: 12,
  },
  label: {
    fontSize: 13,
    color: "#C2410C",
    fontWeight: "800",
  },
  value: {
    fontSize: 17,
    color: "#431407",
    fontWeight: "700",
    marginTop: 4,
  },
  actions: {
    marginTop: 8,
  },
  homeButton: {
    backgroundColor: "#F97316",
  },
  logoutButton: {
    backgroundColor: "#9A3412",
  },
})
