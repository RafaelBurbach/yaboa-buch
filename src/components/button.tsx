import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from "react-native"

type ButtonProps = TouchableOpacityProps & {
  label: string
}

export function Button({ label, style, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity style={[styles.button, style]} activeOpacity={0.7} {...rest}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    height: 54,
    backgroundColor: "#F97316",
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "700",
  },
})
