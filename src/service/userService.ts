import { IUser } from '../model/user';
import * as userObj from '../repository/userRepository';

export const createUser = async (name: string)=>{
    return await userObj.createUser(name);
}