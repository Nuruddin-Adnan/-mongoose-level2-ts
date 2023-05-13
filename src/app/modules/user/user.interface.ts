import { HydratedDocument, Model } from "mongoose";

export interface IUser {
    id: Number;
    role: string;
    password: string;
    name: {
        firstName: string;
        lastName: string;
    };
    dateOfBirth?: Date;
    gender: "male" | "female";
    email?: string;
    contactNo: string;
    emergencyContactNo: string;
    imageURL: string,
    presentAddress: string;
    permanentAddress: string;
    trackId: number
};

// instance method
export interface IUserMethods {
    fullName(): string;
}

export interface UserModel extends Model<IUser, {}, IUserMethods> {
    getAdminUsers(): Promise<HydratedDocument<IUser[]>>;
}
