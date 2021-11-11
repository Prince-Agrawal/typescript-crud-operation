
import { GraphQLUpload  , graphqlUploadExpress } from 'graphql-upload'
// import { finished } from 'stream/promises';

export const resolvers = {
    Upload: GraphQLUpload,

    Query: {
        otherFields(){
            return true;
        }
    },
  
    Mutation: {
      singleUpload: async (_:void, args:any) => {
        const { createReadStream, filename, mimetype, encoding } = await args.file;

        const stream = createReadStream();
  
        const out = require('fs').createWriteStream(`./uploadFiles/${filename}`);
        stream.pipe(out);
  
        return { filename, mimetype, encoding };
      },
    },
  
}

