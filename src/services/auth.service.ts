import bcrypt from "bcrypt";
import { insertUser } from "../repositories/user.repository.js";

export const createUser = async (email: string, password: string) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await insertUser(email, hashedPassword);
    return user;
}