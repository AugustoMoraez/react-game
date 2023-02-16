import { InfoItemCont} from "./style"

//Info Item


type InfoItemProp = {
    title:string,
    content:string
}


export const InfoItem = ({title,content}:InfoItemProp) => {
    return(
        <InfoItemCont>
            <p>{title}</p>
            <p>{content}</p>
        </InfoItemCont>
    )
}


