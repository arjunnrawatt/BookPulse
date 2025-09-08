import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { User } from "@shared/api";

type AuthContextType = {
  user: User | null;
  signIn: (email: string, name?: string) => void;
  signOut: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const LS_KEY = "bookpulse_user";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const raw = localStorage.getItem(LS_KEY);
    if (raw) setUser(JSON.parse(raw));
  }, []);

  const signIn = (email: string, name?: string) => {
    const u: User = { id: email, email, name };
    setUser(u);
    localStorage.setItem(LS_KEY, JSON.stringify(u));
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem(LS_KEY);
  };

  const value = useMemo(() => ({ user, signIn, signOut }), [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
