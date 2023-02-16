import { Btn, IconImg, IconContainer, Label } from "./style"

type ButtonProp = {
    content:string,
    icon:any,
    fnc:React.MouseEventHandler<HTMLDivElement>
}


export const Button = ({content,icon,fnc}:ButtonProp) => {
    return(
        <Btn onClick={fnc}>
            {icon &&
                <IconContainer>
                    <IconImg src={icon}/>
                </IconContainer>
            }
            <Label>{content}</Label>
        </Btn>
    )
}