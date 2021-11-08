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
            return createNotes(args.input);
        },
        async updateNote(_:void, args: any){
            return updateNotes(args.id , args.input);
        }
    }
}