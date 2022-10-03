import styled from 'styled-components';
let quantidadeMeta
export default function MetaZap(props){
    function sairTelaInicio(){
        props.setMetaMinima(quantidadeMeta)
        props.setTelaInicial(false)
        props.setListaRespostas(props.criarLista())
    }
    function valor(e){
        let valorAtual = e.target.value
        if(props.dados.length >= valorAtual && valorAtual > 0){
            props.setBotaoAtivo(false)
            quantidadeMeta=valorAtual
        }else{
            props.setBotaoAtivo(true)
        }
    }
    return(
    <>
        <Digitar type='number' placeholder={"Escolha sua meta de zaps...(max:"+(props.dados.length)+')'}  onChange={e => valor(e)} data-identifier="goals-input"/>
        <Botao onClick={sairTelaInicio} disabled= {props.botaoAtivo} data-identifier="start-btn">Iniciar Recall!</Botao>
    </>
    )
}

const Digitar = styled.input`
    width: 246px;
    height: 43px;
    border: 1px solid gray;
    outline: 0px;
    padding-left: 7px;
    border-radius: 5px;
    color: #FB6B6B;
    font-family: 'Roboto';
`

const Botao = styled.button`
  margin: 30px;
  width: 246px;
  height: 54px;
  padding: 16px 22px;
  border-radius: 5px;
  color: #D70900;
  border: 1px;
  font-size: 18px;
  cursor: pointer;
  font-family: 'Recursive';
&:hover {
    background-color: #cea2a0;
  }
&:disabled{
    background-color: #E8E8E8;
    cursor: default;
    color: #C0C0C0;
}
`