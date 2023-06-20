import {ApolloServer} from '@apollo/server'
import {startStandaloneServer} from '@apollo/server/standalone' // app.listen 동일

const typeDefs = `#graphql
    type Query {
        AAA : String
    }
`

const resolvers = {
    Query : {
        AAA : () => {
            return "Hello World"
        }
    }

   // Mutation : {


   // }
}
const server = new ApolloServer({
    typeDefs : typeDefs,
    resolvers : resolvers

})

startStandaloneServer(server)