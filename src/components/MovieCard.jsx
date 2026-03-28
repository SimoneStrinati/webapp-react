import { Link } from "react-router-dom";
import style from "./MovieCard.module.css";

function MovieCard({movie}) {

    const { id, title, director, abstract, image } = movie;

    const apiUrl = "http://localhost:3000/static/movies_cover";


    return <div className={style.card}>
            <img src={`${apiUrl}/${image}`} alt={title} />
            <h2>{title}</h2>
            <h3>{director}</h3>
            <p>{abstract}</p>
            <Link to={`/movies/${id}`}>Vai alla pagina di dettaglio film</Link>
        </div>

};

export default MovieCard;