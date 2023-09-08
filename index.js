import { app } from "./app.js";
import { server } from "./config.js";

const port = server.port;

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})