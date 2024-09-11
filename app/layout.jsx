import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import "./globals.css";
import { ColorSchemeScript } from "@mantine/core";
import ColorSchemeProvider from "./components/ColorSchemeProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <ColorSchemeProvider>{children}</ColorSchemeProvider>
      </body>
    </html>
  );
}
