"use client";

import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import { CartProvider } from "./context/CartContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
          <CartProvider>
            <ThemeProvider>
              <main>
                {children}
              </main>
            </ThemeProvider>
          </CartProvider>
      </body>
    </html>
  );
}
