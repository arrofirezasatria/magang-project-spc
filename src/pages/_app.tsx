import type { AppProps } from "next/app";
import ThemeProvider from "@modules/components/ThemeContext";
import { Provider } from "react-redux";
import store from "../../store/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}
