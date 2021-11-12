
import { GraphQLUpload  , graphqlUploadExpress } from 'graphql-upload';

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
        console.log("C:/Users/Prince Agrawal/Desktop/weboneX/typescript-mongodb-setup/uploadFiles/"+`${filename}`)
        return { filename, mimetype, encoding };
      },
    },
  
}

