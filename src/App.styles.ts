import style from 'styled-components';

export const Container =  style.div`
    width: 100%;
    max-width: 1140px;
    margin: auto;
    display: flex;
    justify-content: space-around;
    padding: 20px 20px;
    font-family: sans-serif
`;

export const Info =  style.div`
    display: flex;
    flex-direction: column;
    
`;

export const InfoArea =  style.div`
    display: flex;
    flex-direction: column;
    text-align: center;
`;

export const Title =  style.h1`
    color: royalblue;
`;

export const Grid =  style.div`
    background-color: #ff0000;
    width: 100%;
    margin-left:40px
`;