import { INote } from '../model/notes';
import { createNote } from '../repository/notesRepository';
import { createNotes , getAllNote , getNotesById , updateNotes} from '../service/notesService';

export const resolvers = {
    Query: {
        getAllNotes(){
            return getAllNote();
        },
        getNoteById(_: void, args: any){
            return getNotesById(args.id);
        }
    },

    Mutation: {
        createNote(_: void, args: any){
            const input = {
                title: args.title,
                discription: args.discription,
                participants: args.participants
            } as INote;
            return createNotes(input);
        },
        async updateNote(_:void, args: any){
            return updateNotes(args.id , args.input);
        }
    }
}

