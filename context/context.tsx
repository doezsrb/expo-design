import { createContext, useContext, useState } from "react";

const AppContext = createContext<{
  signIn: () => void;
  signOut: () => void;
  session: boolean;
}>({ signIn: () => null, signOut: () => null, session: false });

export function useSession() {
  const value = useContext(AppContext);

  return value;
}

export function AppProvider({ children }: any) {
  const [session, setSession] = useState(false);
  return (
    <AppContext.Provider
      value={{
        signIn: () => {
          console.log("sesion");
          setSession(true);
        },
        signOut: () => {
          setSession(false);
        },
        session,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
