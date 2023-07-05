const {UserList, MovieList} = require("../FakeData");
const _ = require("lodash");

const resolvers = {
    Query: {
        users: () => {
            //API call to get data(eg query DB)
            return UserList;
        },
        user: (parent, args) => {
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
};

module.exports = {resolvers};