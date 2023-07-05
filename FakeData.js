const UserList = [
    {
        id: 1,
        name: "Walt",
        userName: "walt",
        age: 31,
        nationality: "CANADA",
        friends: [
            {
                id: 2,
                name: "ABC",
                userName: "abc",
                age: 29,
                nationality: "UK"
            },
            {
                id: 3,
                name: "EFG",
                userName: "efg",
                age: 33,
                nationality: "CHINA"
            },
        ],
    },
    {
        id: 2,
        name: "ABC",
        userName: "abc",
        age: 29,
        nationality: "UK"
    },
    {
        id: 3,
        name: "EFG",
        userName: "efg",
        age: 33,
        nationality: "CHINA"
    },
];

const MovieList = [
    {
        id: 1,
        name: "Avatar",
        yearOfPub: 2009,
        isInTheaters: true
    },
    {
        id: 2,
        name: "Harry Potter",
        yearOfPub: 2008,
        isInTheaters: false
    },
    {
        id: 3,
        name: "Mission Imposible V",
        yearOfPub: 2019,
        isInTheaters: true
    },
];

module.exports = {UserList, MovieList}