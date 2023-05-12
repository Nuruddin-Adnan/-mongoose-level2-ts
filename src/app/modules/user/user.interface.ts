export interface IUser {
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