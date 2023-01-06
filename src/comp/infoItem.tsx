import * as C from './styles'

type props = {
    name:string,
    info:string
}

export const infoItem = ({name,info}:props) => {
    return(
        <C.Container>
            <C.label></C.label>
            <C.info></C.info>

        </C.Container>
    )
}