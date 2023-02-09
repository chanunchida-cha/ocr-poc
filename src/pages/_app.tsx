import "@/styles/globals.css";
import type { AppProps } from "next/app";
// pages/_app.js
import { Prompt } from "@next/font/google";

const prompt = Prompt({
  weight: "400",
  subsets: ["thai", "latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={prompt.className}>
      <Component {...pageProps} />
    </main>
  );
}
