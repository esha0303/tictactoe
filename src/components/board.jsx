import React, { useState } from "react";
import Squares from "./square";

    function Board(){
        const [states, setState]=useState(Array(9).fill(null));
        const [isTurn, setTurn]=useState(true);
const[winner, winnerUpdate]=useState(null);

const handleClick=(index)=>{
    // console.log("working", index);
    const newState=[...states];
    newState[index]=isTurn?"X":"O";
    setState(newState);
    setTurn(!isTurn);  
}
const isWinner=checkWinner(newState);
if(isWinner){
winnerUpdate(isWinner);
}
const checkWinner=()=>{
    const winners=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
       ];
       
       for(let i=0; i<winners.length;i++){
           const [a,b,c]=winners[i];
           if(Squares[a]&&Squares[a]===Squares[b]&&Squares[b]===Squares[c]){
               return Squares[a];
           }
           
       } 
       return null; 
       
       
            }
            
        return(
            <>
            <div className="container p-10 mt-10 ">
{isWinner?<>"someone is {winner} won"</>:
           <>
            <div className="flex flex-row items-center justify-center " >
        <Squares onClick={()=>handleClick(0)} value={states[0]} />
        <Squares  onClick={()=>handleClick(1) }  value={states[1]}/>
        <Squares  onClick={()=>handleClick(2)} value={states[2]}/>

        </div>
        <div className="flex flex-row items-center justify-center">
        <Squares  onClick={()=>handleClick(3)} value={states[3]}/>
        <Squares  onClick={()=>handleClick(4)} value={states[4]}/>
        <Squares  onClick={()=>handleClick(5)} value={states[5]}/>
        
        </div>
        <div className="flex flex-row items-center justify-center">
        <Squares  onClick={()=>handleClick(6)} value={states[6]}/>
        <Squares  onClick={()=>handleClick(7)} value={states[7]}/>
        <Squares  onClick={()=>handleClick(8)} value={states[8]}/>
        </div>
         </>     
         }
        </div>
        </>
    )
}
export default Board;