const handler = (req, res) => {
  // Set headers for SSE response
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  // Start sending SSE updates to the client
  sendUpdates(req, res);
};

export default handler;

// Function to send SSE updates to the client
function sendUpdates(req, res) {
  const batchSize = 100; // Number of items to send in each batch
  const data = getData(); // Get large data set
  let index = 0; // Index of last item sent to the client

  // Send data in batches
  const sendBatch = () => {
    const batch = data.slice(index, index + batchSize);
    if (batch.length > 0) {
      res.write(`data: ${JSON.stringify(batch)}\n\n`);
      index += batchSize;
      setTimeout(sendBatch, 5000); // Send next batch after a delay
    }
  };

  // Start sending batches to the client
  sendBatch();

  // Clean up SSE connection on client disconnect
  req.socket.on("close", () => {
    console.log("Client disconnected");
  });
}

// Function to generate a large data set
function getData() {
  const data = [];
  for (let i = 0; i < 10000; i++) {
    data.push({ id: i, message: `Item ${i}` });
  }
  return data;
}
