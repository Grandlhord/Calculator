import React from "react";


export default function Title (){
    return(
        <section className="head">
            <div className="title">
                <h5 className="calc">calc</h5>
            </div>
            <div className="theme">
                <p className="theme-text">theme</p>
            
                <div className="toggle">
                     <button className="toggle-buttton" id="btn1">
                        1
                    </button>
                    <button className="toggle-buttton" id="btn2">
                        2
                    </button>
                    <button className="toggle-buttton" id="btn3">
                        3
                    </button>
                </div>
            </div>
        </section>
    )
}