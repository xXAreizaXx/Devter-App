import AppLyout from "@c/AppLyout";

export default function MyApp({ Component, pageProps }) {
  return (
    <AppLyout>
      <Component {...pageProps} />
    </AppLyout>
  );
}
