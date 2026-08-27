import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Links | Evolutec Educação",
  description: "Links e acessos importantes da Evolutec Educação.",
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
