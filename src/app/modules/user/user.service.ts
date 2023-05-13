import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserService = async (data: IUser): Promise<IUser> => {
    // const result = await User.create(data);
    const user = new User(data);

    // instance method
    // console.log(user.fullName());

    await user.save()
    return user;
}

export const getUsersService = async (): Promise<IUser[]> => {
    const users = await User.find().select({ password: 0 });
    return users;
}

export const getUserByIdService = async (id: string): Promise<IUser | null> => {
    const user = await User.findOne({ id: id }, { password: 0 });
    return user;
}