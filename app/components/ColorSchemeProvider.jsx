"use client";

import { useState, useEffect } from "react";
import { MantineProvider } from "@mantine/core";

export default function ColorSchemeProvider({ children }) {
  const [colorScheme, setColorScheme] = useState("light");

  useEffect(() => {
    const savedColorScheme = localStorage.getItem("mantine-color-scheme");
    if (savedColorScheme) {
      setColorScheme(savedColorScheme);
    }
  }, []);

  const toggleColorScheme = (value) => {
    const nextColorScheme =
      value || (colorScheme === "dark" ? "light" : "dark");
    setColorScheme(nextColorScheme);
    localStorage.setItem("mantine-color-scheme", nextColorScheme);
  };

  return (
    <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
      {children}
    </MantineProvider>
  );
}
