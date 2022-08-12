import React from 'react'

interface IProps{
  numberOfCard: number
  numberOfWins: number
}

const Header: React.FC<IProps> = ({numberOfCard, numberOfWins}) => {
  return (
    <div className='header'>
      <h1 >My Game</h1>
      <h5>Number Of Wins: {numberOfWins}/{numberOfCard} </h5>
    </div>
  )
}

export default Header
