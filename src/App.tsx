import * as C from "./App.styles";
import { InfoItem } from "./comp/InfoItem";
import { Button } from "./comp/Buttom";
import imgRestart from './assets/imgs/restart.svg';
import { useEffect, useState } from "react";
import { GridItemType } from "./types/gridItemType";
import {data} from './data/data';
import { GridItem } from "./comp/gridItem";
import { FormatTimer } from "./helpers/formatTimer";




function App() {

  
  const[gridItem,setGridItem] = useState<GridItemType[]>([]);
  const[play,setPlay] = useState<boolean>(false);
  const[timeLp,setTimeLp] = useState<number>(0);
  const[shown,setShown] = useState<number>(0);
  const[move,setMove] = useState<number>(0);


  useEffect(
    ()=>{
     ResetAndCreateGrid()
    },[]
  )
  
  useEffect(()=>{
    const Timer = setInterval(()=>{
      if(play){
        setTimeLp(timeLp + 1);
      }
    },1000)
    return () => clearInterval(Timer);
  },[timeLp,play])

  useEffect(()=>{
    if(shown === 2){
      let gridCopy = gridItem.filter(Item => Item.show === true);
      let TempGrid = [...gridItem];
      if(gridCopy[0].item === gridCopy[1].item){
        
        for(let i in TempGrid){
          if(TempGrid[i].show){
            TempGrid[i].pShow = true
            TempGrid[i].show = false
            
          }
        }
        setShown(0);
        setGridItem(TempGrid);
        setMove(move => move + 1);
      }else{
        setTimeout(()=>{
          for(let i in TempGrid){
            TempGrid[i].show = false
          }
          setShown(0);
          setGridItem(TempGrid);
          setMove(move => move + 1);
        },700)
      }
    }
  },[gridItem,shown])

  useEffect(()=>{
    let tempGrid = [...gridItem]
    if(move > 0 && gridItem.every(item => item.pShow === true)){
      setPlay(false);
      setTimeout(()=>{
        alert(`Parabens você terminou o quebra cabeça e seu tempo foi de ${FormatTimer(timeLp)}`)
      },1000)
      ResetAndCreateGrid()   
    }
  },[gridItem,move])

  const ResetAndCreateGrid = () => {
    setMove(0)
    setShown(0);
    setTimeLp(0)
    
    let tempGrid:GridItemType[] = [];

    for(let i=0;i< (data.length * 2); i++){
      tempGrid.push({
        item:null,
        show:false,
        pShow:false
      })
    }
    for(let w = 0 ;w < 2 ;w++){
      for(let i=0 ;i < data.length ; i++){
        let pos = -1
        while(pos < 0 || tempGrid[pos].item !== null ){
          pos = Math.floor(Math.random() * (data.length * 2))
        }
        tempGrid[pos].item = i;
      }
    }
    setGridItem(tempGrid)
    setPlay(true)
    
  }
 
  const HandleItemClick = (index:number) => {
    if(play && index !== null && shown < 2){
      let tempGrid = [...gridItem]
      
      if(tempGrid[index].pShow === false && tempGrid[index].show=== false){
        tempGrid[index].show = true
        setShown(shown + 1);
      }


      setGridItem(tempGrid)
    }
  }

  return (
    <C.Container>
      <C.Info>
        <C.Title>Jogo da Memoria</C.Title>
        <C.InfoArea>
          <InfoItem title="Tempo" content={FormatTimer(timeLp)}/>
          <InfoItem title="Tentativas" content={`${move}`}/>
        </C.InfoArea>
        <Button content="Reiniciar" icon={imgRestart} fnc={ResetAndCreateGrid} />
        
      </C.Info>
      <C.GridArea>
        <C.Grid>
          {gridItem.map((item,index)=>(
            <GridItem
              key={index}
              item={item}
              onClick={()=>HandleItemClick(index)}
            />
          ))}
        </C.Grid>        
      </C.GridArea>
    </C.Container>
  );
}

export default App;
