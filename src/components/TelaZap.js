import dados from "./dados.js";
import FlashCard from "./FlashCard";

export default function TelaZap(props){
    console.log(props.dados)
    return(
    <>
    <div className="deck">
        <div className="header">
            <img src={props.logo} alt='oi'/>
            ZapRecall
        </div>
        <div className="main">
            {props.dados.map((f) => <div key={f.id}><FlashCard dadosFlashCard={f}/></div> )}
        </div>

    <div className="footer">

</div>
    </div>
    </>
)
}
