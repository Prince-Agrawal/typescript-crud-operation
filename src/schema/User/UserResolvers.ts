export const resolvers = {
    Query: {
        getAllUsers(){
            const arr = [{
                firstname: "Prince",
                lastname: "Agrawa;",
                discription: "Prince Agrawal Discription"
            }]

            return arr;
        }
    }
}