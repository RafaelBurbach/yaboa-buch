import { StyleSheet, TextInput, TextInputProps } from "react-native"

export function Input({ style, ...rest }: TextInputProps) {
  return (
    <TextInput 
      style={[styles.input, style]} 
      placeholderTextColor="#A16207" 
      {...rest} 
    />
  )
}

const styles = StyleSheet.create({
  input: {
    height: 54,
    backgroundColor: "#FFF7ED",
    borderColor: "#FDBA74",
    borderWidth: 1,
    borderRadius: 18,
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#431407",
  },
})
