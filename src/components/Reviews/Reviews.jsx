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
        };

        fetchReviews();
    }, [movieId]);

    return(
        <Wrapper>
            <RewievHeader>
                Reviews
            </RewievHeader>
            {reviews.length ? (
                <RewievList className="reviews-container">
                    {reviews.map(review => (
                        <RewievListItem className="review-card" key={review.id}>
                           <Author>Author: {review.author}</Author> 
                           <Rewiev>{review.content}</Rewiev>
                        </RewievListItem>
                    ))}
                </RewievList>
            ) : (
                <NoReviewsText>
                    We don't have any rewievs for this movie yet
                </NoReviewsText>
            )}
        </Wrapper>
    );
};

export default Reviews;