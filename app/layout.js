import { Inter } from "next/font/google";
import Navbar from "./components/Navbar/Navbar";
import "./globals.css";
import Footer from "./components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Integris",
  description:
    "ntegris International FZE is a specialist in the import and export of petrochemical products across a variety of countries.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
