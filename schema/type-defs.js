const {gql} = require("apollo-server")

//pure graphQL code
const typeDefs = gql`
    type User {
        id: ID!
        name: String!
        userName: String!
        age: Int!
        nationality: Nationality!
        friends: [User]
        favoriteMovies: [Movie]
    }

    type Movie {
        id: ID!
        name: String!
        yearOfPub: Int!
        isInTheaters: Boolean!
    }

    type Query {
        users: [User!]!
        user(id: ID!): User!
        movies: [Movie!]!
        movie(name: String!): Movie!
    }

    input CreateUserInput {
        name: String!
        userName: String!
        age: Int!
        nationality: Nationality = CANADA
    }

    input UpdateUsernameInput {
        id: ID!
        newUserName: String!
    }

    type Mutation {
        createUser(input: CreateUserInput!): User!
        updateUsername(input: UpdateUsernameInput!): User!
        deleteUser(id: ID!): User
    }

    enum Nationality {
        CANADA
        BRAZIL
        CHINA
        UK
    }
`;

module.exports = {typeDefs};