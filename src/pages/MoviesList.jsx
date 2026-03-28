import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

import axios from "axios";

function MoviesList() {

    const [movies, setMovies] = useState([])

    useEffect(() => {

        axios.get("http://localhost:3000/api/movies").then(res => {
            console.log(res.data);
            setMovies(res.data);
        }).catch(err => console.error("Errore durante il recupero dei film:", err.message));
    }, []);

    return <>

        <h1>Lista completa dei film</h1>

        <div className="cards-container">
            {movies.map((movie, id) => <MovieCard key={id} movie={movie} />)}
        </div>

    </>

};

export default MoviesList;