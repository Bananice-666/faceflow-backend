import app from "./app.js";
import { pool } from "./db/pool.js";

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

pool.query("SELECT NOW()")
    .then(() => console.log("Database connected successfully"))
    .catch((err) => console.error("Database connection error:", err));