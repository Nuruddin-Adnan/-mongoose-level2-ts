import { Schema, model } from "mongoose";
import { IUser } from "./user.interface";
import validator from 'validator';

const userSchema = new Schema<IUser>({
    id: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        required: true,
        enum: ["student", "teacher"]
    },
    password: {
        type: String,
        required: true
    },
    name: {
        firstName: {
            type: String,
            required: true,
            minLength: 3,
            maxLength: 100
        },
        lastName: {
            type: String,
            required: true,
            minLength: 3,
            maxLength: 100
        }
    },
    dateOfBirth: {
        type: Date
    },
    gender: {
        type: String,
        enum: ["male", "female"]
    },
    email: {
        type: String,
        validate: [validator.isEmail, "Please provide a valid email"]
    },
    contactNo: {
        type: String,
        required: true,
    },
    emergencyContactNo: {
        type: String,
        required: true,
    },
    presentAddress: {
        type: String,
        required: true,
    },
    permanentAddress: {
        type: String,
        required: true,
    }

})

const User = model<IUser>('User', userSchema);

export default User;