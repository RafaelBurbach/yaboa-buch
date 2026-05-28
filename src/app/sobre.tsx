import { Link } from "expo-router"
import { Image, ScrollView, StyleSheet, Text, View } from "react-native"

import { BottomNav } from "../components/bottom-nav"
import { Button } from "../components/button"

export default function Sobre() {
  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Image source={require("../assets/img/yaboa-cropped.png")} style={styles.logo} />

        <View style={styles.card}>
          <Text style={styles.title}>Sobre</Text>
          <Text style={styles.text}>
            O Yaboa é uma plataforma de entretenimento e geolocalização que ajuda usuários a descobrir eventos, festas e locais movimentados em tempo real. Através de um mapa interativo com sistema de check-in dinâmico, os locais ganham destaque conforme a quantidade de interações dos usuários, facilitando a busca por experiências, socialização e ambientes que combinam com cada estilo.
          </Text>
          <Link href="/home" asChild>
            <Button label="Voltar para Home" />
          </Link>
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
  },
  text: {
    fontSize: 17,
    lineHeight: 25,
    color: "#7C2D12",
    marginTop: 12,
    marginBottom: 18,
  },
})
