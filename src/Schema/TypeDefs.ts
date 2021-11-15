import { gql } from 'apollo-server-express';

export const typeDefs = gql`
    type Note {
        title: String,
        discription: String,
        participants: [String]
    }

    input NoteInput{
        title: String,
        discription: String,
        participants: [String]
    }

    type Query{
        getAllNotes : [Note]
        getNoteById(id: String!): Note
    }

    type Mutation{
        createNote(title:String , discription:String , participants:[String]): Note
        updateNote(id: String! , input: NoteInput): Note
    }

`