import React from 'react';
import { useSelector } from 'react-redux';

import { StateType } from '../reducers';
import { Piece } from './Piece';

export const Board: React.FC = () => {
  const board = useSelector((state: StateType) => state.board);

  return (
    <div className="board">
      {board.map((type, i) => {
        const black = Math.floor(i / 8) % 2 === i % 2;
        return (
          <div key={i} className={black ? 'black' : 'white'}>
            <Piece type={type} />
          </div>
        );
      })}
    </div>
  );
};
