import React from "react";

export default function Input(){
    return(
        <section className="inputs">
            <div className="grid-container">
                <div className="item7">7</div>
                <div className="item8">8</div>
                <div className="item9">9</div>
                <div className="itemDel">DEL</div>
                <div className="item4">4</div>
                <div className="item5">5</div>
                <div className="item6">6</div>
                <div className="itemplus">+</div>
                <div className="item1">1</div>
                <div className="item2">2</div>
                <div className="item3">3</div>
                <div className="itemminus">-</div>
                <div className="itempoint">.</div>
                <div className="item0">0</div>
                <div className="itemdiv">/</div>
                <div className="itemx">X</div>
            </div>

            <div className="resetequal">
                <div className="itemreset">RESET</div>
                <div className="itemequal">=</div>
            </div>
                
        </section>
    )
}