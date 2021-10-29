import express, { Request, Response, Application } from 'express';
import mongoose from 'mongoose';
require('dotenv').config();
const app = express();

const notesRoute = require('./controller/notesController');
const userDetailRoute = require('./controller/usersController');

let PORT: number = 5000;
app.use(express.json());

app.use('/' , notesRoute);
app.use('/user' , userDetailRoute);



// let db: string = 'mongodb+srv://prince:Prince1009@cluster0.m4ifg.mongodb.net/typescript?retryWrites=true&w=majority';

// Connect to MongoDB
mongoose
  .connect(
    process.env.MONGO_URI || ""
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.listen(PORT , ()=>{
    console.log(`server is connected on port: ${PORT}`);
})