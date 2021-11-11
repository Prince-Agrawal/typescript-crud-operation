import express, { Request, Response, Application } from 'express';
import mongoose from 'mongoose';
import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "./schema/TypeDefs";
import { resolvers } from "./schema/Resolvers";
import notesRoute from './controller/notesController';
import userDetailRoute from './controller/usersController';
import *  as constObj from './util/constant';
import { rejects } from 'assert';

require('dotenv').config();
const app = express();
const server = new ApolloServer({ typeDefs , resolvers });

const PORT: number = constObj.PORT;
app.use(express.json());


app.use('/' , notesRoute);
app.use('/user' , userDetailRoute);


const bootStrap = async ()=>{

  // apollo server starter
  await server.start()
  server.applyMiddleware({app });


  // let db: string = 'mongodb+srv://prince:Prince1009@cluster0.m4ifg.mongodb.net/typescript?retryWrites=true&w=majority';
  // Connect to MongoDB
  await mongoose
    .connect(
      process.env.MONGO_URI || ""
    )
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));
}


bootStrap().then(()=>{
  app.listen(PORT , async ()=>{
    console.log(`🚀 Server ready at http://localhost:5000${server.graphqlPath}`);
  })
}).catch(()=>{
  console.log("Failed")
})
