import { Link } from "react-router-dom";
import style from "./MovieCard.module.css";

function ReviewCard({review}) {

    const { id, name, vote, text, image } = review;

    return <div className={style.card}>
            <h2>{name}</h2>
            <h3>Valutazione: {vote}/5</h3>
            <p>{text}</p>

            <Link to={`/movies`}>Torna alla lista dei film</Link>
        </div>

};
export default ReviewCard;