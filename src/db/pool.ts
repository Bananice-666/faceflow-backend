import { env } from "process";
import { Pool } from "pg";

export const pool = new Pool({
    host: env.DB_HOST,
    port: env.DB_PORT ? parseInt(env.DB_PORT) : 5432,
    user: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
});