import React, { useState } from "react";
import Squares from "./square";
    function Board(){
        const [states, indexS]=useState(Array(8).fill(null));
        const [isXturn, setTurn]=useState();
        const handleClick=(index)=>{
            const newState=[...states];
            newState[index]=isXturn? "x":"o";
        }
        // const[state, indexstate]=useState();
        return(
            <>
            <div className="container mt-10 p-10 ">
            <div className="flex flex-row justify-center items-center ">
        <Squares  onClick={()=>handleClick(0)} />
        <Squares  onClick={()=>handleClick(1)}/>
        <Squares  onClick={()=>handleClick(2)}/>

        </div>
        <div className="flex flex-row justify-center items-center">
        <Squares  onClick={()=>handleClick(3)}/>
        <Squares  onClick={()=>handleClick(4)}/>
        <Squares  onClick={()=>handleClick(5)}/>
        
        </div>
        <div className="flex flex-row justify-center items-center">
        <Squares  onClick={()=>handleClick(6)}/>
        <Squares  onClick={()=>handleClick(7)}/>
        <Squares  onClick={()=>handleClick(8)}/>
         
        </div>
        </div>
        </>
    )
}
export default Board;