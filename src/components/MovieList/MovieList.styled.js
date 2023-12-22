import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledSection = styled.section`
    padding-right: 50px;
    padding-left: 50px;
    `;

export const SectionTitle = styled.h2`
    margin-top: 30px;
    margin-bottom: 30px;
    padding-left: 5px;
    font-size: 30px;
    font-weight: 600;
    text-align: left;
    `;

export const List = styled.ul`
    list-style: circle;
    color: #0d57aa;
    `;

export const ListItem = styled.li`
    &:not(:last-child) {
        margin-bottom: 8px;
    }
    `;

export const StyledLink = styled(Link)`
    font-size: 18px;
    color: #Od57aa;
    transition: color 0.2s ease-in-out, border-bottom 0.2s ease-in-out;
    text-decoration: none;
    &:hover,
    &:focus {
        background-color: lightblue;
        color: darkblue;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
        border-bottom: 2px solid #1c85ff;
    }
`;


