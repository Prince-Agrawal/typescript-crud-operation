import { gql } from 'apollo-server-express';
import { Schema } from 'mongoose';

// const participantType = Schema.Types.ObjectId;

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
        getNoteById(id: String): Note
    }

    type Mutation{
        createNote(input: NoteInput): Note
        updateNote(id: String , input: NoteInput): Note
    }

`