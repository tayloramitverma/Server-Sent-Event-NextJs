// /components/SseDisplay.js
import { useContext, useState } from "react";
import SseContext from "../context/SseContext";

export default function SseDisplay() {
  const { data, connect, disconnect } = useContext(SseContext);
  const [url, setUrl] = useState("");

  function handleConnect() {
    connect(url);
  }

  function handleDisconnect() {
    disconnect();
  }

  return (
    <div>
      <input
        type="text"
        value={url}
        onChange={(event) => setUrl(event.target.value)}
      />
      <button onClick={handleConnect}>Connect</button>
      <button onClick={handleDisconnect}>Disconnect</button>
      {data.length > 0 &&
        data.map((item, index) => {
          return <p key={index}>{`${item.id}: ${item.message}`}</p>;
        })}
    </div>
  );
}
