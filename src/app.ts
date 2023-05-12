import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { Schema, model } from 'mongoose';
import validator from 'validator';


const app: Application = express();

//middleware  
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', async (req: Request, res: Response) => {

    /*
    Steps 1 = Create Interface
    Steps 2 = Create Schema
    Steps 3 = Create model
    Steps 4 = Create inserging to database
    */

    interface IUser {
        id: string;
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
        presentAddress: string;
        permanentAddress: string;
    };

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

    const user = new User(req.body);


    // const result = await User.create(req.body)
    const result = await user.save();

    // res.send('Hello World!')

    res.send(result)
})

export default app;