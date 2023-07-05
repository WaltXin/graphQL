`
  query ExampleQuery {
    users {
      name
      nationality
      friends {
        name
        age
      }
      favoriteMovies {
        yearOfPub
        name
      }
    }
  }
  
  query ExampleQuery($userId: ID!) {
    user(id: $userId) {
      ...GetUserData
    }
  }
  
  fragment GetUserData on User {
    id
    name
    age
    nationality
    favoriteMovies {
      name
    }
  }

  query ExampleQuery {
    movies {
      name
      isInTheaters
    }
  }

  query ExampleQuery($name: String!) {
    movie(name: $name) {
      name
      yearOfPub
    }
  }

  #create user
  mutation CreateUser($input: CreateUserInput!){
    createUser(input: $input) {
      id
      name
      age
    }
  }

  #Variables
  {
    "input": {
      "name": "Jonny",
      "userName": "jonny",
      "age": 25,
    }
  }

  #update username
  mutation UpdateUsername($input: UpdateUsernameInput!) {
    updateUsername(input: $input) {
      name
      userName
    }
  }
  #Variables
  {
    "input": {
      "id": "1",
      "newUserName": "xiong"
    }
  }

  # remove user
  mutation removeUser($deleteUserId: ID!){
    deleteUser(id: $deleteUserId) {
      name
    }
  }

  #Variables
  {
    "deleteUserId": "1"
  }


  # Union
  query GetAllUsers {
    users {
      ...on UsersSuccessfulResult {
        users {
          id
          name
          age
        }
      }
  
      ...on UsersErrorResult {
        message
      }
    }
  }
  






`