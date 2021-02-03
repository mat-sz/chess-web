import React, { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { possibleMoves } from '../functions/board';

import { StateType } from '../reducers';
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
  );
};
