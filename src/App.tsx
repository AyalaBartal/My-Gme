import {useState} from 'react';
import './index.css';
import Board from './components/Board';
import Header from './components/Header';
import ICard from './inteface/ICard';

function App() {

  const [cards, setCards] = useState<ICard[]>([{ cardId: 1, coupleId: 1, text: "a", isFaceDown: true}, { cardId: 2, coupleId: 3, text: "c", isFaceDown: true},
                                               { cardId: 3, coupleId: 7, text: "g", isFaceDown: true}, { cardId: 4, coupleId: 2, text: "b", isFaceDown: true},
                                               { cardId: 5, coupleId: 4, text: "d", isFaceDown: true}, { cardId: 6, coupleId: 8, text: "h", isFaceDown: true},
                                               { cardId: 7, coupleId: 3, text: "c", isFaceDown: true}, { cardId: 8, coupleId: 9, text: "i", isFaceDown: true},
                                               { cardId: 9, coupleId: 5, text: "e", isFaceDown: true}, { cardId: 10, coupleId: 5, text: "e", isFaceDown: true},
                                               { cardId: 11, coupleId: 8, text: "h", isFaceDown: true}, { cardId: 12, coupleId: 6, text: "f", isFaceDown: true},
                                               { cardId: 13, coupleId: 2, text: "b", isFaceDown: true}, { cardId: 14, coupleId: 1, text: "a", isFaceDown: true},
                                               { cardId: 15, coupleId: 6, text: "f", isFaceDown: true}, { cardId: 16, coupleId: 7, text: "g", isFaceDown: true},
                                               { cardId: 17, coupleId: 9, text: "i", isFaceDown: true}, { cardId: 18, coupleId: 4, text: "d", isFaceDown: true}])

  const [card, setCard] = useState<ICard>()
  const [makeMove, setMakeMove] = useState<boolean>(true)
  const [winsNumber, setWinsNumber] = useState(0)

  const onClick = (currentCard : ICard) => {
    if(currentCard.isFaceDown && makeMove){
      const updateCard = {... currentCard, isFaceDown: false}
      setCards(cards.map((card) => card.cardId === currentCard.cardId ? updateCard : card))
      chackForPair(updateCard)
    }
  }

  const chackForPair = (selectedCard: ICard) => {
    if(card === undefined){
      setCard(selectedCard)
    }else{
      setMakeMove(false)
      if(card.coupleId !== selectedCard.coupleId){
        setTimeout(function(){
          updateCardInList({... selectedCard, isFaceDown: true})
          updateCardInList({... card, isFaceDown: true})
          finishTurn()
        }, 1000);
      }else{
        setWinsNumber(winsNumber+1)
        finishTurn()
      }
      
    }
  }

  const finishTurn = ()=> {
    setMakeMove(true)
    setCard(undefined)
  }

  const updateCardInList = (newCard : ICard) => {
    setCards(cards.map((currentCard) => currentCard.cardId === newCard.cardId ? newCard : currentCard))
  }

  return (
    <div>
      <Header numberOfCard={cards.length/2} numberOfWins={winsNumber}/>
      <Board cards={cards} onClick={onClick}/>
    </div>
  );
}

export default App;
