import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from "services/api";
import { Author, NoReviewsText, Rewiev, RewievHeader, RewievList, RewievListItem, Wrapper } from "./Reviews.styled";


const Reviews = () => {
    const { movieId } = useParams();
    const [ reviews, setReviews ] = useState([]);
    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const { results } = await fetchMovieReviews(movieId);
                setReviews(results);
            } catch (error) {
                console.log(error);
            }
        }
    })
}