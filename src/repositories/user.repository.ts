import { pool } from "../db/pool.js";

export const insertUser = async (email: string, hashedPassword: string) => {
    const result = await pool.query(
        "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id, email",
        [email, hashedPassword]
    );
    return result.rows[0];
}