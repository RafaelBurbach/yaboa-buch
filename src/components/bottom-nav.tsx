import { Link } from "expo-router"
import { StyleSheet, TouchableOpacity, View } from "react-native"

type BottomNavProps = {
  onCreate?: () => void
}

export function BottomNav({ onCreate }: BottomNavProps) {
  return (
    <>
      <View style={styles.navbar}>
        <Link href="/perfil" style={styles.navLink}>Perfil</Link>
        <Link href="/home" style={styles.navLink}>Home</Link>
        <Link href="/contato" style={styles.navLink}>Contato</Link>
        <Link href="/sobre" style={styles.navLink}>Sobre</Link>
      </View>
      {onCreate ? (
        <TouchableOpacity style={styles.createButton} activeOpacity={0.8} onPress={onCreate}>
          <View style={styles.plusHorizontal} />
          <View style={styles.plusVertical} />
        </TouchableOpacity>
      ) : (
        <Link href="/home?create=1" asChild>
          <TouchableOpacity style={styles.createButton} activeOpacity={0.8}>
            <View style={styles.plusHorizontal} />
            <View style={styles.plusVertical} />
          </TouchableOpacity>
        </Link>
      )}
    </>
  )
}

const styles = StyleSheet.create({
  navbar: {
    position: "absolute",
    left: 16,
    right: 16,
    bottom: 16,
    height: 72,
    backgroundColor: "#FFFFFF",
    borderRadius: 28,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#9A3412",
    shadowOpacity: 0.18,
    shadowRadius: 14,
    elevation: 8,
  },
  navLink: {
    color: "#9A3412",
    fontWeight: "900",
    fontSize: 14,
  },
  createButton: {
    position: "absolute",
    right: 24,
    bottom: 104,
    width: 62,
    height: 62,
    borderRadius: 31,
    backgroundColor: "#F97316",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 5,
    borderColor: "#FFEDD5",
    shadowColor: "#9A3412",
    shadowOpacity: 0.22,
    shadowRadius: 12,
    elevation: 10,
    padding: 0,
  },
  plusHorizontal: {
    position: "absolute",
    width: 26,
    height: 5,
    borderRadius: 3,
    backgroundColor: "#FFFFFF",
  },
  plusVertical: {
    position: "absolute",
    width: 5,
    height: 26,
    borderRadius: 3,
    backgroundColor: "#FFFFFF",
  },
})
