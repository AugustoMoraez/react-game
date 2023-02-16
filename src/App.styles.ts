import styled from 'styled-components';

export const Container =  styled.div`
    width: 100%;
    max-width: 1140px;
    margin: auto;
    display: flex;
    justify-content: space-around;
    padding: 20px 20px;
    font-family: sans-serif;

    @media(max-width:750px){
        flex-direction: column;
    }
`;

export const Title = styled.h1`
    text-align: center;
    color: #101C40;
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: auto;

`;

export const InfoArea = styled.div`
   
`;

export const GridArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    @media(max-width:750px){
        margin-top: 25px;
    }
`;
export const Grid = styled.div`
    width: 100%;
    max-width: 430px;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 10px;
    @media(max-width:700px){
        grid-template-columns: repeat(3,1fr);
    }
`;