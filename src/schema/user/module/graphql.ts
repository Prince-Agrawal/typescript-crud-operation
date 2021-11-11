import { createModule } from 'graphql-modules';
import { typeDefs } from '../type/typeDefs';
import { resolvers } from '../resolver/resolvers';

export const UserModule = createModule({
    id: 'user-module',
    dirname: __dirname,
    typeDefs: [typeDefs],
    resolvers: [resolvers]
  });