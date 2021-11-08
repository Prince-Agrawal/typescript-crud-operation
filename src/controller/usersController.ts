import express, { Request, Response, Application } from 'express';
import User, { IUser } from '../model/user';
import * as userObj from '../service/userService';

const router = express.Router();

router.post("/" , async(req: Request  , res: Response)=>{
    const user: IUser = await userObj.createUser(req.body.name);
    res.json(user);
})

export default router;