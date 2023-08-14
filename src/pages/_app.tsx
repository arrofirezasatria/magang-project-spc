import type { AppProps } from "next/app";
import ThemeProvider from "@modules/components/ThemeContext";
import { Provider } from "react-redux";
import store from "../../store/store";
import AppsbarExample from "@layouts/AppsbarExample";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <AppsbarExample />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}
