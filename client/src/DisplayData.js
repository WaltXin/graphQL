import React, {useState} from 'react'
import {useQuery, useLazyQuery, gql} from '@apollo/client'

const QUERY_ALL_USERS = gql`
    query GetAllUsers {
        users {
            id
            name
            userName
            age
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
`

const QUERY_ALL_MOVIES = gql`
    query GetAllMovies {
        movies {
            name
            isInTheaters
        }
    }
`

const GET_MOVIE_BY_NAME = gql`
    query GetMovieByName($name: String!) {
        movie(name: $name) {
            name
            yearOfPub
        }
    }
`

function DisplayData() {
    const[movieSearched, setMovieSearched] = useState("")

    const {data, loading, error} = useQuery(QUERY_ALL_USERS);
    const {data: movieData, loading: movieLoading, error: movieError} = useQuery(QUERY_ALL_MOVIES);
    const [fetchMovie, {data: movieSearchData, error: movieSearchError}] = useLazyQuery(GET_MOVIE_BY_NAME)

    if (loading) {
        return <h1>Data is loading...</h1>
    }
    if (error) {
        console.log(error)
    }
    return <div>
        {data && data.users.map((user) => {
        return <div>
            <h1>
                Name: {user.name}
            </h1>
            <h1>
                Username: {user.userName}
            </h1>
            <h1>
                Age: {user.age}
            </h1>
        </div>
        })}
        {movieData && movieData.movies.map((movie) => {
            return <h1>{movie.name}</h1>
        })}

        <div>
            <input type="text" placeholder='Harry Potter...' onChange={(event) => {
                setMovieSearched(event.target.value)
            }}/>
            <button onClick={() => {
                fetchMovie({variables: {
                    name: movieSearched
                }})
            }}> Get Movie </button>
            <div>
                {movieSearchData && <div>
                    <h1>MovieName: {movieSearchData.movie.name}</h1>
                    <h1>yearOfPub: {movieSearchData.movie.yearOfPub}</h1>
                    </div>}
                {movieSearchError && <h1>Movie name wrong</h1>}
            </div>
        </div>
    
    </div>
}

export default DisplayData