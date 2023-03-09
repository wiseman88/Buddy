import Layout from "@/src/components/Layout";
import { wrapper } from "@/store/store";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import { Provider } from "react-redux";

export default function App({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;
  return (
    <Provider store={store}>
      <ThemeProvider attribute="class">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>
  );
}
