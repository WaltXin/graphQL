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
      id
      name
      age
      nationality
      favoriteMovies {
        name
      }
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





`