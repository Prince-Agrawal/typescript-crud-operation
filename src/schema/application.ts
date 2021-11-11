import { createApplication } from 'graphql-modules';
import { AuthorModule } from './author/module/graphql';
import { NoteModule } from './note/module/graphql';
import { UserModule } from './user/module/graphql';


export const application = createApplication({
    modules: [AuthorModule, NoteModule, UserModule],
  });