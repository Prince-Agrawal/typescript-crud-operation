import express, { Request, Response, Application } from 'express';
import mongoose from 'mongoose';
import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "./Schema/TypeDefs";
import { resolvers } from "./Schema/Resolvers";

require('dotenv').config();
const app = express();
const server = new ApolloServer({ typeDefs , resolvers });

const notesRoute = require('./controller/notesController');
const userDetailRoute = require('./controller/usersController');

let PORT: number = 5000;
app.use(express.json());

const apolloServerSetup = async() =>{
  await server.start()
  server.applyMiddleware({app });
}

apolloServerSetup();



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
  
    console.log(`🚀 Server ready at http://localhost:5000${server.graphqlPath}`);
})