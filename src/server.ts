import app from "./app.js";
import { pool } from "./db/pool.js";

const PORT = process.env.PORT || 4000;

const startServer = async () => {
    await pool.query("SELECT NOW()");
    console.log("Database connected successfully");

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

startServer();