export default function Inicio(props){
    function sairTelaInicio() {
        props.setTelaInicial(false)
        console.log('oi')
        
    }
    return(
        <div className="home">

        <div className="deck">
        <div className="header">
            <img src={props.logo} alt='oi'/>
            ZapRecall
        </div>

        <button onClick={sairTelaInicio}>Iniciar Recall!</button>
        </div>
        </div>
    )
    }