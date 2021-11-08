import { Schema } from 'mongoose';
import Note, {INote} from '../model/notes';
import { IUser } from '../model/user';

export const createNote = async(note: INote)=>{
    const data: INote = await Note.create({
        title: note.title,
        discription: note.discription,
        participants: note.participants
    })

    return data;
}

export const getAllNotes = async()=>{
    const data: INote[] = await Note.find();
    return data;
}

export const getNoteById = async(id: IUser["_id"])=>{
    const data = await Note.findById(id);
    return data;
    
}

export const updateNote = async(id: any, note: any)=>{
    const data = await Note.findOneAndUpdate({_id: id}, {$set: note} , {new: true});
    return data;
}