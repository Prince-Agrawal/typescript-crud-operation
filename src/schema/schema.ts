import lodash, { merge } from 'lodash'
import {typeDefs as noteTypeDefs}  from "./Note/NoteTypeDefs";
import {typeDefs as userTypeDefs} from './User/UserTypeDefs'
import {typeDefs as authorTypeDefs} from './Author/AuthorTypeDefs'
import { resolvers as noteResolvers} from "./Note/NoteResolvers";
import {resolvers as userResolvers} from './User/UserResolvers';
import {resolvers as authorResolvers} from './Author/AuthorResolvers';


export const typeDefs = [noteTypeDefs , userTypeDefs , authorTypeDefs];

export const resolvers = merge(noteResolvers , userResolvers , authorResolvers); 