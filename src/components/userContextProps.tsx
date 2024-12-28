import React, { createContext, useState, ReactNode } from 'react';

interface UserContextProps {
  user: string | null;
  setUser: React.Dispatch<React.SetStateAction<string | null>>;
}

export const UserContext = createContext<UserContextProps | undefined>(undefined);

const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

  const [user, setUser] = useState<string | null>(null);
  return (

    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
