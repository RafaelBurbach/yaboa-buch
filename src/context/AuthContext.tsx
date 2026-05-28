import { createContext, PropsWithChildren, useContext, useState } from "react"

type User = {
  name: string
  email: string
  password: string
}

type LoginInfo = {
  email: string
  password: string
}

type AuthContextData = {
  user: User | null
  loginInfo: LoginInfo | null
  signUp: (data: User) => void
  signIn: (data: LoginInfo) => void
  signOut: () => void
}

const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState<User | null>(null)
  const [loginInfo, setLoginInfo] = useState<LoginInfo | null>(null)

  function signUp(data: User) {
    setUser(data)
    setLoginInfo({ email: data.email, password: data.password })
  }

  function signIn(data: LoginInfo) {
    setLoginInfo(data)
  }

  function signOut() {
    setLoginInfo(null)
  }

  return (
    <AuthContext.Provider value={{ user, loginInfo, signUp, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
