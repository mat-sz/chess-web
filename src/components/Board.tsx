import React, { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { indexToAN, possibleMoves } from '../functions/board';

import { StateType } from '../reducers';
import { PieceType } from '../types/PieceType';
import { Square } from './Square';

export const Board: React.FC = () => {
  const board = useSelector((state: StateType) => state.board);
  const [selectedIndex, setSelectedIndex] = useState<number | undefined>(
    undefined
  );

  const highlightedSquares = useMemo(
    () =>
      selectedIndex === undefined ? [] : possibleMoves(board, selectedIndex),
    [board, selectedIndex]
  );

  return (
    <>
      <div className="board">
        {board.map((type, i) => (
          <Square
            index={i}
            type={type}
            selected={selectedIndex === i}
            highlighted={highlightedSquares.includes(i)}
            onSelect={setSelectedIndex}
          />
        ))}
      </div>
      <div className="info">
        {typeof selectedIndex === 'number' && (
          <>
            <div>Selected square: {indexToAN(selectedIndex)}</div>
            <div>Selected piece: {PieceType[board[selectedIndex]]}</div>
          </>
        )}
      </div>
    </>
  );
};
