import { Inter } from "next/font/google";
import "./globals.css";
import App from "@/components/layout/app";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <App/>
    </html>
  );
}
