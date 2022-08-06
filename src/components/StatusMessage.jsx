import React from 'react'

const StatusMessage = ({winner, current}) => {
    const noMovesLeft = current.board.every(el=>el !== null)
  return (
    <h2>
      {winner && `Winner is ${winner}`}
    {!winner && !noMovesLeft && `Next Player is ${current.isNext ? 'X' : 'O'}`}
        {!winner && noMovesLeft && "The Game is Draw"}
    </h2>
  )
}

export default StatusMessage
