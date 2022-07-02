import React, { useContext, useState, useEffect } from 'react'
import { supabase } from 'src/utils/supabaseClient'
// Models
import { User } from 'src/models/auth'

export const AuthContext = React.createContext<User | null>(null)

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }: { children: any }) {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const session = supabase.auth.session()

    setUser(session?.user ?? null)

    const { data: listener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setUser(session?.user ?? null)
      }
    )

    return () => {
      listener?.unsubscribe()
    }
  }, [])

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
}
