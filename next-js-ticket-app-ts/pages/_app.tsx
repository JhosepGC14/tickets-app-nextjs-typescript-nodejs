import "antd/dist/antd.css";
import "../styles/index.css";
import type { AppProps } from "next/app";
import { SocketProvider } from "../context/SocketContext";

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <SocketProvider>
      <Component {...pageProps} />
    </SocketProvider>
  );
}
export default MyApp;
