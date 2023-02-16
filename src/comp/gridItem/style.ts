import styled from "styled-components";

type ContainerProps = {
    backgroundShow:boolean
}
export const Container = styled.div<ContainerProps>`
    background-color: ${props => props.backgroundShow ? "#1550ff" : "#e2e3e3"};
    height: 100px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

`;

type IconProps = {
    op?:number
}

export const Icon = styled.img<IconProps>`
    height: 40px;
    width: 40px;
    opacity:${(props)=> props.op ?? 1} ;
`;