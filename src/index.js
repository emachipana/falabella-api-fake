import app from "./app.js";
import { PORT } from "./contants.js";
import "./db/connection.js";

app.listen(PORT);
console.log(`Server is running on port: ${PORT}`);
