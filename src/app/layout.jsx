import Link from "next/link";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  manifest: "./manifest.json"
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className={inter.className}>
        
        {children}
        <Script src="/service-worker.js" type="module" crossorigin="use-credentials" as="script" />
        <Script src="/sw.js" type="module" crossorigin="use-credentials" as="script" />

        </body>
    </html>
  );
}
