import { sum , getAllNote , getNotesById , createNotes , updateNotes} from '../../src/service/notesService';
import {INote} from '../../src/model/notes';
import {getAllNotes , getNoteById , createNote , updateNote} from '../../src/repository/notesRepository';
jest.mock("../../src/repository/notesRepository");

const mockGetAllNotes = getAllNotes as jest.MockedFunction<typeof getAllNotes>;
const mockGetNoteById = getNoteById as jest.MockedFunction<typeof getNoteById>;
const mockCreateNote = createNote as jest.MockedFunction<typeof createNote>;
const mockUpdateNote = updateNote as jest.MockedFunction<typeof updateNote>;

const MOCK_VALID_NOTE_ARRAY:INote[] = [];

const MOCK_NOTE_OBJECT = ({
    title: "Mock Title",
    discription: "Mock Discription",
    participants:["617a998f27054aeb95220a8b"]
}) as (INote & {_id: any})

const ID:string = "617a998f27054aeb95220a8b";

describe("getAllNote" , ()=>{
    it("returns array of note" , async()=>{
        mockGetAllNotes.mockResolvedValue(MOCK_VALID_NOTE_ARRAY);
        const expectedNotes: INote[] = await getAllNote();

        expect(getAllNotes).toHaveBeenCalledTimes(1);
        expect(expectedNotes.length).toBe(0);

    })
})

describe("getNotesById" , ()=>{
    it("returns note from a valid id" , async()=>{

        mockGetNoteById.mockResolvedValue(MOCK_NOTE_OBJECT);
        const expectedNote = await getNotesById(ID);

        expect(getNoteById).toHaveBeenCalledTimes(1);
        expect(expectedNote?.title).toEqual(MOCK_NOTE_OBJECT.title);
    })
})

describe("createNotes" , ()=>{
    it("create new note and return" , async()=>{

        mockCreateNote.mockResolvedValue(MOCK_NOTE_OBJECT);
        const expectedNote = await createNotes(MOCK_NOTE_OBJECT);

        expect(createNote).toHaveBeenCalledTimes(1);
        expect(expectedNote).toEqual(MOCK_NOTE_OBJECT);

    })
})

describe("updateNotes" , ()=>{
    it("update note and return" , async()=>{

        mockUpdateNote.mockResolvedValue(MOCK_NOTE_OBJECT);
        const expectedNote = await updateNotes(ID, MOCK_NOTE_OBJECT);

        expect(updateNote).toHaveBeenCalledTimes(1);
        expect(expectedNote).toEqual(MOCK_NOTE_OBJECT);

    })
})


describe("sum" , ()=>{
    it("run your test case" , ()=>{
        expect(sum(1,2)).toBe(3);
    })
})

test("sum to be 4" , ()=>{
    expect(sum(2,2)).toBe(4);
})