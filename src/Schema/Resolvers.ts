import { createNotes , getAllNote , getNotesById , updateNotes} from '../service/notesService';
import Note, {INote} from '../model/notes';

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
            // const note = args.input;
            // console.log(args.id);
            // let data = await Note.findOneAndUpdate({_id: args.id}, {$set: note} , {new: true});
        }
    }
}