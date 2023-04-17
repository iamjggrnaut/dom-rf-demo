import React, { useState, useEffect } from 'react';
import { createContext } from "react";

export const themes = {
  dark: "",
  light: "dark-content",
};

export const ThemeContext = createContext({
    theme: themes.dark,
  changeTheme: () => {},
});

export default function ThemeContextWrapper(props) {
  const [theme, setTheme] = useState(themes.dark);

  function changeTheme(theme) {
    setTheme(theme);
  }

  useEffect(() => {
    switch (theme) {
      case themes.light:
        document.body.classList.add('dark-content');
        break;
      case themes.dark:
      default:
        document.body.classList.remove('dark-content');
        break;
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}