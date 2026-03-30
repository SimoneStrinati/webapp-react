import axios from "axios";
import { useState } from "react";

const ReviewForm = (props) => {

    const movieId = props.movieId;
    const reloadReviews = props.onCallBack;
    const apiUrl = `http://localhost:3000/api/movies/${movieId}/review`;
    const initialFormData = {
        name: "",
        vote: "",
        text: ""
    };

    const [formData, setFormData] = useState( initialFormData );

    function handleSubmit(e) {
        e.preventDefault();

        if (isNaN(formData.vote) || formData.vote < 1 || formData.vote > 5) {
            alert("La valutazione deve essere un numero compreso tra 1 e 5");
            return;
        };

        axios.post(apiUrl, formData).then(res => {
            console.log("Recensione inviata con successo!", res.data);
            setFormData({ initialFormData });
            reloadReviews();
        }).catch(err => {
            console.error("Errore durante l'invio della recensione:", err.message);
        });
    };

    function setNewValue(e) {

        let newForm = {
            ...formData,
        };

        newForm[e.target.name] = e.target.value;

        setFormData(newForm);
    }


    return <div>
        <h1>Form per inserire una recensione</h1>

        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Nome:</label>
            <input name="name" placeholder="Autore recensione" value={formData.name} onChange={setNewValue} />
            <label htmlFor="vote">Valutazione:</label>
            <input type="number" name="vote" min="1" max="5" value={formData.vote} onChange={setNewValue} />
            <label htmlFor="text">Recensione:</label>
            <textarea name="text" placeholder="Scrivi la tua recensione qui..." value={formData.text} onChange={setNewValue} ></textarea>

            <button type="submit">Invia recensione</button>
        </form>


    </div>
}

export default ReviewForm;