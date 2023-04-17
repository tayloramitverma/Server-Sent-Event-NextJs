// /context/SseContext.js
import { createContext, useEffect, useState } from "react";

const SseContext = createContext({
  data: null,
  connect: () => {},
  disconnect: () => {},
});

export function SseContextProvider({ children }) {
  const [data, setData] = useState([]);
  const [sse, setSse] = useState(null);

  function connect(url) {
    setSse(new EventSource(url));
  }

  function disconnect() {
    sse.close();
    setSse(null);
    setData([]);
  }

  useEffect(() => {
    if (sse) {
      sse.onmessage = (event) => {
        const newData = JSON.parse(event.data);
        setData((prevItems) => [...prevItems, ...newData]);
      };
    }

    return () => {
      if (sse) {
        sse.close();
      }
    };
  }, [sse]);

  return (
    <SseContext.Provider value={{ data, connect, disconnect }}>
      {children}
    </SseContext.Provider>
  );
}

export default SseContext;
