import styled from 'styled-components'
import play from '../assets/img/seta_play.png'
export default function Fechado(props){
    function abrir(){
        props.setFechado(false)
    }
    return(
        <FlashCard>
            <p>Pergunta {props.dadosFlashCard.id+1}</p>
            <div>
                <img onClick={abrir} src={play}/>
            </div>
        </FlashCard>
    )
}

const FlashCard = styled.div`
  width: 300px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  color: black;
  border-radius: 5px;
  margin: 25px 0px;
  padding: 10px 10px;
  cursor: pointer;
  font-family: 'Recursive';
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  p{
    font-family: 'Recursive', sans-serif;
  }
  `