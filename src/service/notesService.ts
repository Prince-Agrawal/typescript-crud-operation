import { ObjectId, Schema } from 'mongoose';
import mongoose from 'mongoose'
import {INote} from '../model/notes';
import { IUser } from '../model/user';
import { createNote , getAllNotes , getNoteById , updateNote} from '../repository/notesRepository';

export const createNotes = async (note: INote)=>{
    return await createNote(note);
}

export const getAllNote = async()=>{
    return await getAllNotes();
}

export const getNotesById = async(id: IUser["_id"])=>{
    return await getNoteById(id);
}

export const updateNotes = async(id: any , note: Partial<INote>)=>{
    return await updateNote(id , note);
}