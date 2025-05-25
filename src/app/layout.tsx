import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import './styles.css'

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Credential Manipulator",
  description: "Manipulador de Credencial",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins}`}>
        {children}
      </body>
    </html>
  );
}
