import express, { Request, Response, Application } from 'express';
import mongoose from 'mongoose';
import Note , {INote} from '../model/notes';
import { createNotes , getAllNote , getNotesById , updateNotes} from '../service/notesService';

const router = express.Router();

// create note
router.post("/notes" , async (req: Request  , res: Response)=>{
    const note: INote = await createNotes(req.body);
    res.json(note);
})

// get all note
router.get("/notes" , async (req: Request  , res: Response)=>{
    const notes: INote[] = await getAllNote();
    res.json(notes);
})

// get note by id
router.get("/notes/:id" , async (req: Request  , res: Response)=>{
    let note = await getNotesById(req.params.id);
    res.json(note);
})

// update note by id
router.put("/notes" , async (req: Request  , res: Response)=>{
    // const id  = new mongoose.Types.ObjectId(req.query.id);

    const data = await updateNotes(req.query.id , req.body);
    res.json(data);
})

export default router;