import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import clsx from "clsx";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div className={clsx(inter.className, " text-slate-900")}>
      <Component {...pageProps} />
    </div>
  );
};

export default App;
