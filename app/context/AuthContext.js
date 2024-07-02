import { createContext, useEffect, useState } from "react";
import { supabase } from "../utils/supabase";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userId, setUserId] = useState("");
  const [user, setUser] = useState(null);
  const getUser = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    setUser(user.user_metadata);
    setUserId(user.id);
  };
  useEffect(() => {
    if (!userId) {
      getUser();
    }
  }, [userId]);

  return (
    <AuthContext.Provider value={{ userId, user }}>
      {children}
    </AuthContext.Provider>
  );
};
