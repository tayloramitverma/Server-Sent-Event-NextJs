import { MyContextProvider } from "@/context/MyContext";
import { SseContextProvider } from "@/context/SseContext";
export default function App({ Component, pageProps }) {
  return (
    <SseContextProvider>
      <MyContextProvider>
        <Component {...pageProps} />
      </MyContextProvider>
    </SseContextProvider>
  );
}
