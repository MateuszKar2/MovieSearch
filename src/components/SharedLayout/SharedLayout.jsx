import React, {Suspense} from "react";
import { Outlet } from 'react-router-dom';
import { LoadingIndicator } from './LoadingDots';
import { StyledHeader, StyledNavlink } from './SharedLayout.styled';

const SharedLayout = () => {
    return (
        <>
            <StyledHeader>
                <nav>
                    <StyledNavlink to="/">Home</StyledNavlink>
                    <StyledNavlink to="/movies">Movies</StyledNavlink>
                </nav>
            </StyledHeader>

            <Suspense fallback={<LoadingIndicator />}>
                <Outlet />
            </Suspense>
        </>
    )
}