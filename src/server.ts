import "reflect-metadata";

import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { AppointmentsResolver } from "./resolvers/AppointmentsResolver";


async function main(){
    const schema = await buildSchema({
        resolvers:[
            AppointmentsResolver
        ],
        emitSchemaFile: true
    })
    const server = new ApolloServer({schema})

    try {
        server.listen().then(({url}) => {
          console.log(`🚀 Server ready at ${url}`)
        })
    } catch(e) {
        console.log(e)
        process.exit(1)
    }
}
main()