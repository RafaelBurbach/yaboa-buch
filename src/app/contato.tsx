import { Link } from "expo-router"
import { Image, ScrollView, StyleSheet, Text, View } from "react-native"

import { BottomNav } from "../components/bottom-nav"
import { Button } from "../components/button"

export default function Contato() {
  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Image source={require("../assets/img/yaboa-cropped.png")} style={styles.logo} />

        <View style={styles.card}>
          <Text style={styles.title}>Contato</Text>
          <Text style={styles.text}>
            Entre em contato com a equipe Yaboa para dúvidas, sugestões, parcerias ou suporte.
          </Text>
          <View style={styles.contactList}>
            <Text style={styles.contactItem}>- Telefone: (11) 94288-0061</Text>
            <Text style={styles.contactItem}>- E-mail: equipeyaboa@gmail.com</Text>
          </View>

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
    marginBottom: 12,
  },
  contactList: {
    marginBottom: 18,
    gap: 6,
  },
  contactItem: {
    fontSize: 17,
    lineHeight: 25,
    color: "#7C2D12",
  },
})
