import React from 'react'

const StatusMessage = ({winner, current}) => {
    const noMovesLeft = current.board.every(el=>el !== null)
  return (
    <div className='status-message'>
      {winner && <>
        Winner is <span className={winner === 'X' ? 'text-green' : 'text-orange'}>{winner}</span>
      </>}
    {!winner && !noMovesLeft && <> Next Player is <span className={current.isNext ? 'text-green' : 'text-orange'}>{current.isNext ? 'X' : 'O'}</span></>}
        {!winner && noMovesLeft && "The Game is Draw"}
    </div>
  )
}

export default StatusMessage
