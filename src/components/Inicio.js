import logo from '../assets/img/logo.png'

export default function Inicio(props){
    function sairTelaInicio() {
        props.setTelaInicial(false)
        props.setListaRespostas(props.criarLista())
        
    }
    return(
        <div className="home">
        
        <img src={logo} alt='oi'/>
        <h1>ZapRecall</h1>
        <button onClick={sairTelaInicio}>Iniciar Recall!</button>
        </div>
    )
    }