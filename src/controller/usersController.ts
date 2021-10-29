import express, { Request, Response, Application } from 'express';
const router = express.Router();

import User, { IUser } from '../model/user';
import { createUsers } from '../service/userService';

router.post("/" , async(req: Request  , res: Response)=>{
    let user: IUser = await createUsers(req.body.name);
    res.json(user);
})

module.exports = router;