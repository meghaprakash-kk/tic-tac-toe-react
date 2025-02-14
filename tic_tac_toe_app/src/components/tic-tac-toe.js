import React from 'react'
import { useState } from 'react';
import useTicTacToe from '../hooks/use-tic-tac-toe';

function TicTacToe() {
  const{board, handleClick, resetGame, getStatusMsg, calculateWinner} = useTicTacToe();
  return (
      <div className='game'>
     <div className='status'>
        {getStatusMsg()}
        <button className='reset-button' onClick={resetGame}>Reset Game</button>
     </div>
     <div className='board'>
        {board.map((b,index)=>{
          return(
            <button 
                className='cell' 
                key={index} 
                onClick={()=>handleClick(index)}
                disabled={b!= null} >
              {b}
            </button>
          )
        })
        }
     </div>
     
    </div>
  )
}

export default TicTacToe;
