import { Link } from "react-router-dom";

function MovieCard({movie}) {

    const { id, title, director, abstract, image } = movie;

    return <div className="card">
            <img src={image} alt={title}/>
            <h2>{title}</h2>
            <h3>{director}</h3>
            <p>{abstract}</p>
            <Link to={`/movies/${id}`}>Vai alla pagina del film</Link>
        </div>

};

export default MovieCard;