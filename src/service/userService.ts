import { IUser } from '../model/user';
import { createUser } from '../repository/userRepository';

export let createUsers = async (name: string)=>{
    return await createUser(name);
}