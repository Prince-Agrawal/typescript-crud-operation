import { gql } from 'apollo-server-express';

export const typeDefs = gql `
    type Author{
        name: String,
        discription: String
    }

    type Query{
        getAllAuthor : [Author]
    }
`