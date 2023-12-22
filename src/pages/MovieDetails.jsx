
import React, { useEffect, useState } from 'react';
import { useParams, Outlet, useLocation, Link } from 'react-router-dom';
import { BsArrowLeftShort } from 'react-icons/bs';
import { fetchMovieById } from '../services/api';
import MovieCard from '../components/MovieCard/MovieCard';
import { Button, Container } from './MovieDetails.styled';
import { LoadingIndicator } from 'components/SharedLayout/LoadingDots';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [selectedMovie, setSelectedMovie] = useState({});

  useEffect(() => {
    const fetchSelectedMovie = async movieId => {
      try {
        const movieData = await fetchMovieById(movieId);
        setSelectedMovie(movieData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSelectedMovie(movieId);
  }, [movieId]);

  if (!selectedMovie.title) {
    return <LoadingIndicator />;
  }

  return (
    <main>
      <Container>
        <Link to={location?.state?.from ?? '/'}>
          <Button type="button">
            <BsArrowLeftShort
              style={{ width: '20px', height: '20px', display: 'inline-block' }}
            />
            Go back
          </Button>
        </Link>
        <MovieCard movie={selectedMovie} />
        <Outlet />
      </Container>
    </main>
  );
};

export default MovieDetails;