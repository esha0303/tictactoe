import React from "react";

function Squares({onClick, value}){
    return(
        <>
        <div className="p-10 border-2 border-black bg-gray-300" onClick={onClick}>
{value}        </div>
        </>
    )
} 
export default Squares;