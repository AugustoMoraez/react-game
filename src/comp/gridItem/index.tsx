import { GridItemType } from "../../types/gridItemType";
import * as C from "./style";
import b7Svg from "../../assets/imgs/b7.svg";
import { data } from "../../data/data";

type Props ={
    item:GridItemType,
    onClick:()=>void
};

export const GridItem = ({item,onClick}:Props) => {
    return(
        <C.Container
            backgroundShow = {(item.pShow === true || item.show === true)}
            onClick={onClick}>
            
            {
                item.pShow === false && item.show === false &&
                <C.Icon src={b7Svg} op={.3}/>
            }
            {
                (item.pShow === true || item.show === true) && (item.item !== null) &&
                <C.Icon src={data[item.item].icon}/>
            }           
        </C.Container>
    )
}