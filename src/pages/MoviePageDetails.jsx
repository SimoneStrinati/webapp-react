import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 

import ReviewCard from "../components/ReviewCard";
import ReviewForm from "../components/ReviewForm";

function MoviePageDetails(){

    const { id } = useParams();

    const [movie, setMovie] = useState({
        name:"",
        text:"",
        vote:"",
        reviews:[]
    });

    function reloadReviews() {
        axios.get(`http://localhost:3000/api/movies/${id}`).then(res => {
            console.log(res.data);
            setMovie(res.data);
        }).catch(err => console.error("Errore durante il recupero dei film:", err.message));

    }

    useEffect(() => {reloadReviews()}, [id]);

    return <>

        <h1>{movie.title}</h1>

        <div className="cards-container">
            {movie.reviews.map((review, id) => <ReviewCard key={id} review={review} />)}
        </div>

        <ReviewForm movieId={movie.id} onCallBack={reloadReviews} />

    </>

};

export default MoviePageDetails;