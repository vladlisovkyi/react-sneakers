import React, { createContext, useEffect, useMemo } from "react";
import { useDarkMode } from "usehooks-ts";

interface IProps {
  children: React.ReactNode;
}

export const DarkModeContext = createContext({
  isDarkMode: false,
  toggle: () => {},
  enable: () => {},
  disable: () => {},
});

const DarkModeObserver: React.FC<IProps> = ({ children }) => {
  const { isDarkMode, toggle, enable, disable } = useDarkMode();
  useEffect(() => {
    document.body.classList.toggle("light", !isDarkMode);
    document.body.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const value = useMemo(
    () => ({ isDarkMode, toggle, enable, disable }),
    [isDarkMode, toggle, enable, disable]
  );

  return (
    <DarkModeContext.Provider value={value}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeObserver;
