import express, { Request, Response, Application } from 'express';
const router = express.Router();

import Note , {INote} from '../model/notes';

import { createNotes , getAllNote , getNotesById , updateNotes} from '../service/notesService';

// create note
router.post("/notes" , async (req: Request  , res: Response)=>{
    let note: INote = await createNotes(req.body);
    res.json(note);
})

// get all note
router.get("/notes" , async (req: Request  , res: Response)=>{
    let notes: INote[] = await getAllNote();
    res.json(notes);
})

// get note by id
router.get("/notes/:id" , async (req: Request  , res: Response)=>{
    let note = await getNotesById(req.params.id);
    res.json(note);
})

// update note by id
router.put("/notes" , async (req: Request  , res: Response)=>{

    let data = await updateNotes(req.query.id, req.body);
    // console.log(req.query.id);
    // let data = await Note.findOneAndUpdate({_id: req.query.id}, {$set: req.body} , {new: true});
    res.json(data);
})

module.exports = router;