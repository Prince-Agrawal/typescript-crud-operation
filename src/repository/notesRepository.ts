import { Schema } from 'mongoose';
import Note, {INote} from '../model/notes';
import { IUser } from '../model/user';

export let createNote = async(note: INote)=>{
    let data: INote = await Note.create({
        title: note.title,
        discription: note.discription,
        participants: note.participants
    })

    return data;
}

export let getAllNotes = async()=>{
    let data: INote[] = await Note.find();
    return data;
}

export let getNoteById = async(id: IUser["_id"])=>{
    let data = await Note.findById(id);
    return data;
}

export let updateNote = async(id: any, note: any)=>{
    console.log(id , note)
    let data = await Note.findOneAndUpdate({_id: id}, {$set: {note}} , {new: true});
    return data;
}