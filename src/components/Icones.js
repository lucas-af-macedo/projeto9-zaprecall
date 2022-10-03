import error from '../assets/img/icone_erro.png'
import almost from '../assets/img/icone_quase.png'
import zap from '../assets/img/icone_certo.png'
let teste1
let teste2
export default function Icones(props){
    if (props.statusResposta==='error'){
        teste1 = true
        teste2 = false
    }else if (props.statusResposta==='almost'){
        teste1 = false
        teste2 = true
    }else{
        teste1 = false
        teste2 = false
    }
    return(
        <img src={teste1 ? error : teste2 ? almost : zap} />
    )
}