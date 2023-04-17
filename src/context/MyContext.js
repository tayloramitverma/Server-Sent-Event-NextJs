// /context/MyContext.js
import { createContext, useState } from "react";

const MyContext = createContext({
  count: 0,
  increment: () => {},
  decrement: () => {},
});

export function MyContextProvider({ children }) {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <MyContext.Provider value={{ count, increment, decrement }}>
      {children}
    </MyContext.Provider>
  );
}

export default MyContext;
