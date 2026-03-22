import ReviewCard from "../components/ReviewCard";

function MoviePageDetails(){

    const reviewPlaceholder = {
        id: 1,
        name: "Nome dell'utente",
        vote: 8,
        text: "Recensione del film",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg"
    }

    return <>

        <h1>Pagina di dettaglio del film</h1>

        <ReviewCard review={reviewPlaceholder} />

    </>

};

export default MoviePageDetails;