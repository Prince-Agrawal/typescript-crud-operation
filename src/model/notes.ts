import mongoose , { Schema , Document } from 'mongoose';
import { IUser } from './user';

export interface INote extends Document {
    title: string,
    discription: string,
    participants: IUser['_id']
}

const NotesSchema: Schema = new Schema({
    title: { type: String , required: true },
    discription: { type: String , required: true },
    participants: { type: [Schema.Types.ObjectId] , required: false }
});

export default mongoose.model<INote>('Note', NotesSchema);
