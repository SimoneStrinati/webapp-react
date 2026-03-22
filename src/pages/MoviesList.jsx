import MovieCard from "../components/MovieCard";

function MoviesList() {


    const movieplaceholder = {
        id: 1,
        title: "Titolo del film 1",
        director: "Regista",
        abstract: "Descrizione del film 1",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg"
    }

    return <>

        <h1>Lista completa dei film</h1>

        <div className="cards-container">
            <MovieCard movie={movieplaceholder} />
        </div>
        
    </>

};

export default MoviesList;