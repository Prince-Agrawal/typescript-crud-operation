import { ObjectId, Schema } from 'mongoose';
import {INote} from '../model/notes';
import { IUser } from '../model/user';
import { createNote , getAllNotes , getNoteById , updateNote} from '../repository/notesRepository';

export let createNotes = async (note: INote)=>{
    return await createNote(note);
}

export let getAllNote = async()=>{
    return await getAllNotes();
}

export let getNotesById = async(id: IUser["_id"])=>{
    return await getNoteById(id);
}

export let updateNotes = async(id: any, note: any)=>{
    return await updateNote(id , note);
}