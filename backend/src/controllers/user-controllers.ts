import { NextFunction, Request, Response } from "express";
import User from "../models/User.js";
import { hash } from "bcrypt";

// get all users from the database
export const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const users = await User.find();
        return res.status(200).json({ message: "OK", users })
    } catch (error) {
        return res.status(200).json({message: "ERROR", cause: error.message})
    }
}

// get all users from the database
export const userSignup = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name, email, password } = req.body;
        const hashedPassword = await hash(password, 10);
        const user = new User({ name, email, password: hashedPassword });
        await user.save();
        return res.status(200).json({ message: "OK", id: user._id.toString() })
    } catch (error) {
        return res.status(200).json({message: "ERROR", cause: error.message})
    }
}