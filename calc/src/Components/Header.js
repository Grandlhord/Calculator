import React from "react";


export default function Header (){
    return(
        <Header className="head">
            <div className="title">
                <h5 className="calc">calc</h5>
            </div>

            <div className="toggle">
                <button className="toggle-buttton" id="btn1">
                    0
                </button>
                <button className="toggle-buttton" id="btn2">
                    0
                </button>
                <button className="toggle-buttton" id="btn3">
                    0
                </button>
            </div>
        </Header>
    )
}