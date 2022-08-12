import ICard from '../inteface/ICard'

interface IProps {
  card: ICard
  onClick: (card: ICard) => void
}

const Card: React.FC<IProps> = ({card, onClick}) => {
  return (
      <h1 className='card' onClick={function(){onClick(card)}}>{card.isFaceDown ? "" : card.text}</h1>
  )
}

export default Card
