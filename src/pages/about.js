import React from "react";
import Link from "next/link";
import SseDisplay from "@/components/SseDisplay";

export default function about() {
  return (
    <div>
      <h1>This is about us route!!</h1>
      <Link href="/">Go to Home</Link> <br />
      <Link href="/counter">Go to Counter</Link>
      <br />
      <SseDisplay />
    </div>
  );
}
