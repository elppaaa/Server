import { gql } from "apollo-server-express";

export default gql`
    type Mutation{
       createAuthUser(nickName:String!,avatar:String):MutationResponse 
    }
`