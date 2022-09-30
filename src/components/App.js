import React from 'react';
export default function App(props){
    return(
        <>
        <div className="deck">
            <div className="header">
                <img src={props.logo} alt='oi'/>
                ZapRecall
            </div>

            <div className="main">

                <div className="flashcard ">
                    flashcard 1
                    <div className='aberto'>
            <div className=''>
            <button className='button error'>p</button>
            <button className='button almost'>oi</button>
            <button className='button zap'>oi</button>
            </div>
            </div>
                </div>
                <div className="flashcard">
                    flashcard 2
                </div>

            </div>
        </div>
        <div className="footer">
        </div>
        </>
    )
}