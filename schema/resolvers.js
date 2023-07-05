const {UserList, MovieList} = require("../FakeData");
const _ = require("lodash");

const resolvers = {
    Query: {
        users: () => {
            //API call to get data(eg query DB)
            if (UserList) return {users: UserList};

            return {message: "There was an error"}
        },
        user: (parent, args, context, info) => {
            console.log(context.req.headers)
            const id = args.id;
            const user = _.find(UserList, {id: Number(id)});
            return user;
        },
        movies: () => {
            return MovieList;
        },
        movie: (parent, args) => {
            const name = args.name;
            const movie = _.find(MovieList, {name: name});
            return movie;
        },
    },
    User: {
        favoriteMovies: () => {
            return _.filter(
                MovieList,
                (movie) => movie.yearOfPub >= 2000
            );
        },
    },
    Mutation: {
        createUser: (parent, args) => {
            const user = args.input
            const lastUserId = UserList[UserList.length - 1].id
            user.id = lastUserId + 1
            UserList.push(user)
            return user
        },

        updateUsername: (parent, args) => {
            const {id, newUserName} = args.input
            let userUpdated;
            const user = _.find(UserList, {id: Number(id)});
            user.userName = newUserName
            userUpdated = user
            return userUpdated
        },

        deleteUser: (parent, args) => {
            const id = args.id
            _.remove(UserList, (user) => user.id == Number(id))
            return null
        }
    },

    UsersResult: {
        __resolveType(obj) {
            if (obj.users) {
                return "UsersSuccessfulResult"
            }
            if (obj.message) {
                return "UsersErrorResult"
            }
            return null
        }
    }
};

module.exports = {resolvers};