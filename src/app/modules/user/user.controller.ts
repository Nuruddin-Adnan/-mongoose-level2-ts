import { Request, Response, NextFunction } from "express";
import { createUserService, getUserByIdService, getUsersService } from "./user.service";
import { IUser } from "./user.interface";
import User from "./user.model";

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await createUserService(req.body);

        res.status(200).json({
            status: 'success',
            message: 'Successfully created the brand',
            data: result
        })

        return result;

    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: "Couldn't create user",
            error: `${error.message}`
        })
    }
}


export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await getUsersService();
        res.status(200).json({
            status: 'success',
            message: 'Get users successfully',
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: "Couldn't find users",
            error: `${error.message}`
        })
    }
}

export const getUserById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params
        const result = await getUserByIdService(id);

        if (!result) {
            return res.status(200).json({
                status: 'fail',
                error: 'no user found'
            })
        }

        res.status(200).json({
            status: 'success',
            message: 'Get user successfully',
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: "Couldn't find user",
            error: `${error.message}`
        })
    }
}

export const getAdminUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await User.getAdminUsers();
        res.status(200).json({
            status: 'success',
            message: 'Get admin users successfully',
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: "Couldn't find users",
            error: `${error.message}`
        })
    }
}