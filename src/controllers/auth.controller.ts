import { Request, Response } from "express";
import { createUser } from "../services/auth.service.js";

export const register = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const user = await createUser(email, password);
        return res.status(201).json({ 
            succes: true,
            message: "User registered successfully",
            data: user
        });
    } catch (error) {
        return res.status(500).json({
            succes: false,
            message: "Error registering user",
            error: (error as Error).message
        });
    }
}