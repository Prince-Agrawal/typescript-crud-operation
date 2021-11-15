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

const mutation1 = `
    mutation{
        createNote(title: "${title}" , discription: "${discription}" , participants: "${participants}"){
            title
        }
    }
`

test("create note" , async()=>{

    // mockCreateNotes.mockResolvedValue(MOCK_NOTE_OBJECT);

    const response = await request("http://localhost:5000/graphql" , mutation1);
    expect(response).toEqual({createNote: {
        title: "String"
    }});
})