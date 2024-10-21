import React from "react";

function Squares({onClick}){
    return(
        <>
        <div className="p-10 border-2 border-black bg-gray-300" onClick={onClick}>
            X
        </div>
        </>
    )
} 
export default Squares;