import Navbar from "./components/navbar/Navbar";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "700"],
});

export const metadata = {
  title: "Turu Talking",
  description:
    "Welcome to Turu Talking, the next-generation chat app that is set to redefine the way you connect with friends, family, and colleagues. With its cutting-edge features and user-friendly design, Turu Talking is here to provide a seamless and enjoyable chatting experience like never before.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
