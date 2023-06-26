import React, {useState} from "react";


export default function Display ({ value }){
    const [displayValue, setDisplayValue] = useState("");
    return(
        <section className="display">
            <input type="text" className="text" id="output" placeholder="0" value={value} readOnly></input>
        </section>
    )
}