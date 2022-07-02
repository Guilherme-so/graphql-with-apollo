const { gql } = require("apollo-server")

const typeDefs = gql`
type User{
    id: ID
    name: String!
    username: String!
    age: Int!
    nationality: Nationality
    friends: [User]
    favoriteMovies: [Movie]
}

enum Nationality {
CANADA
GERMANY
TURKEY
BRASIL
}

type Movie{
    id: ID
    name: String!
    rate: Int
    releseadYear: Int!
    isInTheaters: String
}

type Query{
    users: [User!]!
    user(id: ID!): User!
    movies: [Movie!]!
    movie(name: String!): Movie!
}

input createUserInput {    
    name: String!
    username: String!
    age: Int!
    nationality: Nationality = BRASIL
}

input updateUsernameInput {
    id: ID!
    newUsername: String!
}

input createMovieInput{
    id: ID
    name: String!
    rate: Int!
    releseadYear: Int!
    isInTheaters: String
}

type Mutation {
    createUser(input: createUserInput!): User
    updateUsername(input: updateUsernameInput!): User
    deleteUser(id: ID!): User
    createMovie(input: createMovieInput!): Movie
}

`


module.exports = { typeDefs }