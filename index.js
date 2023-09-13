import { server } from "./config.js";
import { app, connectDatabase } from "./app.js";

const port = server.port;

app.listen(port, async () => {
  await connectDatabase();
  console.log(`Server started on port ${port} 📦`)
})