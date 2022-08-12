import Card from './Card'
import ICard from '../inteface/ICard'

interface IProps{
  cards: ICard[]
  onClick: (card: ICard) => void
}

const Board: React.FC<IProps> = ({cards, onClick}) => {

  return (
    <div className='board'>
      <>
        {cards.map((card) => <Card key={card.cardId} card={card} onClick={onClick}/>)}
      </>
    </div>
    
  )
}

export default Board
