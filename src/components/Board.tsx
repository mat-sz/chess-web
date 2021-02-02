import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';

import { StateType } from '../reducers';
import { Piece } from './Piece';
import { selectAction } from '../actions/board';
import { Square } from './Square';

export const Board: React.FC = () => {
  const board = useSelector((state: StateType) => state.board);
  const selectedIndex = useSelector((state: StateType) => state.selectedIndex);
  const dispatch = useDispatch();

  const onSelect = useCallback(
    (index: number) => {
      dispatch(selectAction(index));
    },
    [dispatch]
  );

  return (
    <div className="board">
      {board.map((type, i) => (
        <Square
          index={i}
          type={type}
          selected={selectedIndex === i}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
};
