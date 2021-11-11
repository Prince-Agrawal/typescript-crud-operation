import { createModule } from 'graphql-modules';
import { typeDefs } from '../type/typeDefs';
import { resolvers } from '../resolver/resolvers';

export const AuthorModule = createModule({
    id: 'author-module',
    dirname: __dirname,
    typeDefs: [typeDefs],
    resolvers: [resolvers]
  });