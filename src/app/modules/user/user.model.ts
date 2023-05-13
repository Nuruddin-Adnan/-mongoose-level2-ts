import { Model, Schema, model } from "mongoose";
import { IUser, IUserMethods, UserModel } from "./user.interface";
import validator from 'validator';

// type UserModel = Model<IUser, {}, IUserMethods>;

const userSchema = new Schema<IUser, UserModel, IUserMethods>({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    role: {
        type: String,
        required: true,
        enum: ["student", "teacher", "admin"]
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
        validate: [validator.isMobilePhone, "Please provide a valid phone number"]
    },
    emergencyContactNo: {
        type: String,
        required: true,
        validate: [validator.isMobilePhone, "Please provide a valid phone number"]
    },
    imageURL: {
        type: String,
        validate: [validator.isURL, "Please providd a valid image"]
    },
    presentAddress: {
        type: String,
        required: true,
    },
    permanentAddress: {
        type: String,
        required: true,
    },
    trackId: {
        type: Number,
        // required: true,
    }

})


userSchema.static('getAdminUsers', async function getAdminUsers() {
    const retult = await this.find({ role: 'admin' })
    return retult
});

userSchema.method('fullName', function fullName() {
    return this.name.firstName + ' ' + this.name.lastName;
});

const User = model<IUser, UserModel>('User', userSchema);

export default User;