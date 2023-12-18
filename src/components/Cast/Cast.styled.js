import styled from 'styled-components';

export const Wrapper = styled.div`
    margin-top: 30px;
    padding: 0 80px 40px;
    font-size: 18px;
`;

export const CastHeader = styled.h3`
    font-size: 25px;
    text-align: center;    
`;

export const CastList = styled.ul`
    margin-top: 30px;
    display: flex;
    align-items: center;
    row-gap: 40px;
    column-gap: 40px;
    flex-wrap: wrap;
    width: 100%;
`;

export const CastListItem = styled.div`
    width: calc((100% - (4 * 40px)) / 5);
    height: 340px;

    @media screen and (max-width: 768px) {
    height: 180px;
}
`;

export const CastInfo = styled.div`
    margin-top: 20px;
    max-width: 220px;
    font-size: 14px;

    @media screen and (max-width: 768px) {
    font-size: 10px;
    }
`;

export const CastName = styled.h3`
    margin-bottom: 10px;
`;

export const NoCastText = styled.p`
    margin: 30px auto 0 auto;
    text-align: center;
    padding: 20px;
    background-color: #f8f8f8;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    max-width: 500px;
`;

