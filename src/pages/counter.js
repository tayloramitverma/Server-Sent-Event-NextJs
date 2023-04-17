// /components/Counter.js
import { useContext } from "react";
import Link from "next/link";
import MyContext from "../context/MyContext";

export default function Counter() {
  const { count, increment, decrement } = useContext(MyContext);

  return (
    <div>
      <Link href="/about">Go to About!!</Link>
      <br />
      <br />
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
