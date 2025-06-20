import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sergiu Ciaușu portofoliu",
  description: "Acesta este portofoliul meu!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >   
          {children}
      </body>
    </html>
  );
}
