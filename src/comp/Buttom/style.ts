import styled from "styled-components";

//Button
export const Btn = styled.div`
    display: flex;    
    
    align-items: center;
    justify-content: space-between;
    background-color:#1550ff ;
    width: 200px;
    height: 50px;
    border-radius:10px;
    font-size: 20px;
    color:white;
    cursor: pointer;
    opacity: 1;
    transition: all ease .3s;

    &:hover{
        opacity: .8;
    }

`;
///// Botao Icon , IconContainer, Label

export const Label = styled.div`
    margin: auto;

`;

export const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid rgba(255,255,255,0.6);
    padding: 0px 15px;
    height: inherit;
`;
export const IconImg = styled.img`
    width: 15px;
    height: 15px;
    
`;