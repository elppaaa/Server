import { gql } from "apollo-server-express";

export default gql`
    type Mutation{
        authUserLogout(token:String!):MutationResponse
    }
`