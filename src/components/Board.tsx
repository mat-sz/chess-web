import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';

import { StateType } from '../reducers';
import { Piece } from './Piece';
import { selectAction } from '../actions/board';

export const Board: React.FC = () => {
  const board = useSelector((state: StateType) => state.board);
  const selectedIndex = useSelector((state: StateType) => state.selectedIndex);
  const dispatch = useDispatch();

  return (
    <div className="board">
      {board.map((type, i) => {
        const black = Math.floor(i / 8) % 2 === i % 2;
        return (
          <div
            key={i}
            onClick={() => dispatch(selectAction(i))}
            className={clsx('square', {
              black: black,
              white: !black,
              selected: selectedIndex === i,
            })}
          >
            <Piece type={type} />
          </div>
        );
      })}
    </div>
  );
};
