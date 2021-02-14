import React, { useCallback } from 'react';
import clsx from 'clsx';

import { Piece } from './Piece';
import { PieceType } from '../types/PieceType';

export interface SquareProps {
  index: number;
  type: PieceType;
  selected: boolean;
  highlighted: boolean;
  onSelect: (index: number) => void;
}

export const Square: React.FC<SquareProps> = ({
  type,
  selected,
  highlighted,
  index,
  onSelect,
}) => {
  const onClick = useCallback(() => onSelect(index), [onSelect, index]);
  const black = Math.floor(index / 8) % 2 !== index % 2;

  return (
    <div
      onClick={onClick}
      className={clsx('square', {
        black,
        white: !black,
        selected,
        highlighted,
      })}
    >
      <Piece type={type} />
    </div>
  );
};
