import {request} from 'graphql-request';
import { INote } from '../../src/model/notes';
import { createNotes } from '../../src/service/notesService';
jest.mock('../../src/service/notesService');

const mockCreateNotes = createNotes as jest.MockedFunction<typeof createNotes>;

const MOCK_NOTE_OBJECT = ({
    title: "Mock Title",
    discription: "Mock Discription",
    participants:["617a998f27054aeb95220a8b"]
}) as (INote & {_id: any})

const title= "String";
const discription= "String";
const participants= [ "617a61cb84b082180ab3a581"];

const id = "617a998f27054aeb95220a8b";

const createNoteMutation = `
    mutation{
        createNote(title: "${title}" , discription: "${discription}" , participants: "${participants}"){
            title
        }
    }
`

const getAllNotesQuery = `
    query{
        getAllNotes{
            title
        }
    }
`

const getNoteByIdQuery = `
    query{
        getNoteById(id:"${id}"){
            title
        }
    }
`

test("create note" , async()=>{

    // mockCreateNotes.mockResolvedValue(MOCK_NOTE_OBJECT);

    const response = await request("http://localhost:5000/graphql" , createNoteMutation);
    expect(response).toEqual({createNote: {
        title: "String"
    }});
})

test("get all notes" , async()=>{

    // mockCreateNotes.mockResolvedValue(MOCK_NOTE_OBJECT);

    const response = await request("http://localhost:5000/graphql" , getAllNotesQuery);
    // expect(response.length).toEqual(42);
    // check kaise lagaye
})

test("get note by id" , async()=>{

    // mockCreateNotes.mockResolvedValue(MOCK_NOTE_OBJECT); (mocking allowed or not)

    const response = await request("http://localhost:5000/graphql" , getNoteByIdQuery);
    expect(response).toEqual({getNoteById: {
        title: "title upp"
    }});
})