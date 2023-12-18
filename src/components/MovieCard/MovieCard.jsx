import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { LoadingIndicator } from 'components/SharedLayout/LoadingDots';
import { Img,
         List, 
         ListItem, 
         MoreInfoHeader, 
         MovieInfo, 
         MovieName,
         MovieInfoText, 
         MovieInfoTextBold, 
         MoreInfoWrapper,  
         MovieCardContainer,
         StyledLink,
         } from './MovieCard.styled';  

const MovieCard = ({ movie }) => {
    const { title, release_data, poster_path, vote_average, overwiew, genres } = movie;
    const location = useLocation();
    const releaseData = new Data(release_data);

    const releaseYear = isNaN(releaseData)
    ? 'Unknown'
    : releaseData.getFullYear();

    const posterUrl = poster_path
    ? `https://image.tmdb.org/t/p/w400/${poster_path}`
    : 'https://via.placeholder.com/400x600.png?text=Poster+Not+Available';

    const userScore = vote_average
    ? `${(vote_average * 10).toFixed(0)}%`
    : 'Not rated yet';

if (!title) { 
    return <LoadingIndicator />;
}

return (
    <>
        <MovieCardContainer>
            <Img src={posterUrl} alt={`${title} poster`} />
            <MovieInfo>
                <MovieName>
                    {title ?? 'Unknown'} ({releaseYear})
                </MovieName>
                <MovieInfoText>User Score: {userScore}</MovieInfoText>
                <MovieInfoText>
                    <MovieInfoTextBold>Overwiew:</MovieInfoTextBold> {overwiew}
                </MovieInfoText>

                {genres && genres.length > 0 && (
                    <MovieInfoText>
                        <MovieInfoTextBold>Genres:</MovieInfoTextBold>
                        {genres.map(genre => genre.name).join(', ')}
                    </MovieInfoText>
                )}
            </MovieInfo>
        </MovieCardContainer>

        <MoreInfoWrapper>
            <MoreInfoHeader>Additional Information</MoreInfoHeader>

            <List>
                <ListItem>
                    <StyledLink
                        to="cast"
                        state={{ from: location?.state?.from ?? '/' }}
                        >
                        Cast
                    </StyledLink>
                </ListItem>
                <ListItem>
                    <StyledLink
                        to="reviews"
                        state={{ from: location?.state?.from ?? '/' }}
                        >
                        Reviews
                    </StyledLink>
                </ListItem>
            </List>
        </MoreInfoWrapper>
    </>
)
}

MovieCard.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired,
        release_data: PropTypes.string.isRequired,
        poster_path: PropTypes.string.isRequired, 
        vote_average: PropTypes.number, 
        overwiew: PropTypes.string, 
        genres: PropTypes.arrayOf(
            PropTypes.shape({ name:PropTypes.string.isRequired })
        )
    }).isRequired,
}

export default MovieCard;