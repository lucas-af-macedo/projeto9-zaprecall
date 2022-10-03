import FlashCard from "./FlashCard";
import Icones from "./Icones.js";
export default function TelaZap(props){
    function test(){
        console.log((props.listaRespostas.filter((f)=>f!=='')).length)
    }
    return(
    <>
    <div className="deck">
        <div className="header">
            <img src={props.logo} alt='oi'/>
            ZapRecall
        </div>
        <div className="main">
            {props.dados.map((f) => <div key={f.id}><FlashCard 
            dados = {props.dados}
            dadosFlashCard={f}
            setListaRespostas = {props.setListaRespostas}
            listaRespostas = {props.listaRespostas} /></div> )}
        </div>

    <div onClick={test} className="footer">
        <p>Respondidos: {props.listaRespostas.filter((f)=>f!=='').length}/{props.dados.length}</p>
        <div>
        {props.listaRespostas.filter((f)=>f!=='').map((f, index)=><Icones key={index}  statusResposta = {f}></Icones>)}
        </div>
    </div>
    </div>
    </>
)
}
