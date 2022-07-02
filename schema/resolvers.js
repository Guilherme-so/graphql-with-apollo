const { userList, movieList } = require("../fake-data")
const _ = require("lodash")

const resolvers = {
    Query: {
        // Users resolvers
        users: () => {
            return userList
        },
        user: (parent, args) => {
            const id = args.id
            const user = userList.find((single) => single.id === Number(id))
            return user
        },
        //Movies resolvers
        movies: () => {
            return movieList
        },
        movie: (parent, args) => {
            const name = args.name
            const movie = movieList.find((movie) => movie.name === name)
            return movie
        }
    },
    User: {
        favoriteMovies: () => {
            return movieList.filter((lista) => lista.rate >= 80)
        }
    },
    Mutation: {
        createUser: (parent, args) => {
            const user = args.input
            const lastId = userList[userList.length - 1].id
            user.id = lastId + 1
            userList.push(user)
            return user
        },
        updateUsername: (parent, args) => {
            const { id, newUsername } = args.input
            let updatedUser;

            userList.forEach((user) => {
                if (user.id === Number(id)) {
                    user.username = newUsername
                    updatedUser = user
                }
            })
            return updatedUser
        },
        deleteUser: (parent, args) => {
            const id = args.id
            const formatedId = Number(id)
            _.remove(userList, (user) => user.id === formatedId)
            return null
        },
        //movie stuff  
        createMovie: (parent, args) => {
            const movie = args.input
            const movieId = movieList[movieList.length - 1].id
            movie.id = movieId + 1
            movieList.push(movie)
            return movie
        }
    }
}

module.exports = { resolvers }