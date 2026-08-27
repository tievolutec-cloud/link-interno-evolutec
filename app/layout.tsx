import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://recgeral.evolutec.org"),
  title: "Links | Evolutec Educação",
  description: "Links e acessos importantes da Evolutec Educação.",
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
  openGraph: {
    title: "Evolutec · Links Internos",
    description: "Acessos rápidos aos sistemas, documentos e materiais de uso interno da equipe Evolutec.",
    url: "https://recgeral.evolutec.org/",
    siteName: "Evolutec · Links Internos",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Evolutec · Links Internos",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Evolutec · Links Internos",
    description: "Acessos rápidos aos sistemas, documentos e materiais de uso interno da equipe Evolutec.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
