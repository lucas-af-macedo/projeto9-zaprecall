import styled from 'styled-components'
import error from '../assets/img/icone_erro.png'
export default function FlashCardErro(props){
    return(
        <FlashCard data-identifier="flashcard">
        <p data-identifier="flashcard-index-item">Pergunta {props.id+1}</p>
        <div>
            <img src={error} data-identifier="flashcard-status"/>
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
    border-radius: 5px;
    margin: 25px 0px;
    padding: 10px 10px;
    cursor: pointer;
    font-family: 'Recursive';
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    color: #FF3030;
    text-decoration: line-through;
`