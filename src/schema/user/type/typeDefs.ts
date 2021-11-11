import { gql } from 'apollo-server-express';

export const typeDefs = gql `
    type User{
        firstname: String,
        lastname: String,
        discription: String
    }

    type Query{
        getAllUsers : [User]
    }
`