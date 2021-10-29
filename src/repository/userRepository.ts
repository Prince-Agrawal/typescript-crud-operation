import User, { IUser } from '../model/user';

export let createUser = async(name: string) =>{
    let user: IUser = await User.create({
        name: name
    })

    return user;
}