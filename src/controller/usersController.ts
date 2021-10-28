import express, { Request, Response, Application } from 'express';
const router = express.Router();

import User, { IUser } from '../model/user';

router.post("/" , async(req: Request  , res: Response)=>{
    let user: IUser = await User.create({
        name: req.body.name
    })
    res.json(user);
})

module.exports = router;