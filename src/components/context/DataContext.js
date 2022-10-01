import { createContext, useEffect, useState } from "react";

const DataContext = createContext();

export function DataContextProvider({ children }) {
  const [locationData, setLocationData] = useState(null);
  const [logout, setLogout] = useState(false);
  const [overlay, setOverlay] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (userData === null) {
      const data = localStorage.getItem("linkrToken");
      setUserData(JSON.parse(data));
    }
  }, [userData]);

  return (
    <DataContext.Provider
      value={{
        logout,
        setLogout,
        locationData,
        setLocationData,
        userData,
        setUserData,
        overlay,
        setOverlay,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataContext;
