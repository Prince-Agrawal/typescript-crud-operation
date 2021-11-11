import { createModule } from 'graphql-modules';
import { typeDefs } from '../type/typeDefs';
import { resolvers } from '../resolver/resolvers';

export const NoteModule = createModule({
    id: 'note-module',
    dirname: __dirname,
    typeDefs: [typeDefs],
    resolvers: [resolvers]
  });