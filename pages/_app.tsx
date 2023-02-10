import "../styles/globals.css";
import { Lexend_Deca, Big_Shoulders_Display } from "@next/font/google";

const lexend_deca = Lexend_Deca({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lexend_deca",
});

const big_shoulders_display = Big_Shoulders_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-big-shoulders-display",
});

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${lexend_deca.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
