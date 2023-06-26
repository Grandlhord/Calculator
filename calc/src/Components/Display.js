import React from "react";


export default function Display ({ value }){
    
    return(
        <section className="display">
            <input type="text" 
             className="text"
             id="output"
             placeholder="0"
             value={value}
             readOnly 
            />
        </section>
    )
}