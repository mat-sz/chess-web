import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { StateType } from '../reducers';
import { Square } from './Square';

export const Board: React.FC = () => {
  const board = useSelector((state: StateType) => state.board);
  const [selectedIndex, setSelectedIndex] = useState<number | undefined>(
    undefined
  );

  return (
    <div className="board">
      {board.map((type, i) => (
        <Square
          index={i}
          type={type}
          selected={selectedIndex === i}
          onSelect={setSelectedIndex}
        />
      ))}
    </div>
  );
};
