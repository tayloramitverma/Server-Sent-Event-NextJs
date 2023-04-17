import { useEffect, useState } from 'react';

function Index() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Set up SSE connection
    const eventSource = new EventSource('/api/sse');

    // Handle incoming SSE messages
    eventSource.onmessage = (event) => {
      const newData = JSON.parse(event.data);
      setItems((prevItems) => [...prevItems, ...newData]);
    };

    return () => {
      // Clean up SSE connection
      eventSource.close();
    };
  }, []);

  return (
    <div>
      {items.map((item) => (
        <p key={item.id}>{item.message}</p>
      ))}
    </div>
  );
}

export default Index;
