import User, { IUser } from '../model/user';

export const createUser = async(name: string) =>{
    const user: IUser = await User.create({
        name: name
    })

    return user;
}