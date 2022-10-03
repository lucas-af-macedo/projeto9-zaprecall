import styled from 'styled-components'
import almost from '../assets/img/icone_quase.png'
export default function FlashCardQuase(props){
    return(
        <FlashCard data-identifier="flashcard">
        <p data-identifier="flashcard-index-item">Pergunta {props.id+1}</p>
        <div>
            <img src={almost} data-identifier="flashcard-status"/>
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
    color: #FF922E;
    text-decoration: line-through;
`