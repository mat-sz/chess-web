import React from 'react';

import { PieceType } from '../types/PieceType';

export interface PieceProps {
  type: PieceType;
}

export const Piece: React.FC<PieceProps> = ({ type }) => {
  const [mainColor, secondaryColor] =
    type <= 0x10 ? ['white', 'black'] : ['black', 'white'];

  switch (type & 0x0f) {
    case PieceType.WHITE_QUEEN:
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45">
          <g
            fill="none"
            fillRule="evenodd"
            stroke={secondaryColor}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          >
            <path strokeLinejoin="miter" d="M22.5 11.63V6M20 8h5"></path>
            <path
              fill={mainColor}
              strokeLinecap="butt"
              strokeLinejoin="miter"
              d="M22.5 25s4.5-7.5 3-10.5c0 0-1-2.5-3-2.5s-3 2.5-3 2.5c-1.5 3 3 10.5 3 10.5"
            ></path>
            <path
              fill={mainColor}
              d="M12.5 37c5.5 3.5 14.5 3.5 20 0v-7s9-4.5 6-10.5c-4-6.5-13.5-3.5-16 4V27v-3.5c-2.5-7.5-12-10.5-16-4-3 6 6 10.5 6 10.5v7"
            ></path>
            <path d="M12.5 30c5.5-3 14.5-3 20 0M12.5 33.5c5.5-3 14.5-3 20 0M12.5 37c5.5-3 14.5-3 20 0"></path>
          </g>
        </svg>
      );
    case PieceType.WHITE_KING:
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45">
          <g
            fill={mainColor}
            fillRule="evenodd"
            stroke={secondaryColor}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          >
            <path d="M8 12a2 2 0 11-4 0 2 2 0 114 0zM24.5 7.5a2 2 0 11-4 0 2 2 0 114 0zM41 12a2 2 0 11-4 0 2 2 0 114 0zM16 9a2 2 0 11-4 0 2 2 0 114 0zM33 9a2 2 0 11-4 0 2 2 0 114 0z"></path>
            <path
              strokeLinecap="butt"
              d="M9 26c8.5-1.5 18.5-1.5 27 0l2-12-7 11V11l-5.5 13.5-3-15-3 15L14 11v14L7 14l2 12z"
            ></path>
            <path
              strokeLinecap="butt"
              d="M9 26c0 2 1.5 2 2.5 4 1 1.5 1 1 .5 3.5-1.5 1-1 2.5-1 2.5-1.5 1.5 0 2.5 0 2.5 6.5 1 16.5 1 23 0 0 0 1.5-1 0-2.5 0 0 .5-1.5-1-2.5-.5-2.5-.5-2 .5-3.5 1-2 2.5-2 2.5-4-8.5-1.5-18.5-1.5-27 0z"
            ></path>
            <path
              fill="none"
              d="M11.5 30c3.5-1 18.5-1 22 0M12 33.5c6-1 15-1 21 0"
            ></path>
          </g>
        </svg>
      );
    case PieceType.WHITE_ROOK:
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45">
          <g
            fill={mainColor}
            fillRule="evenodd"
            stroke={secondaryColor}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          >
            <path
              strokeLinecap="butt"
              d="M9 39h27v-3H9v3zM12 36v-4h21v4H12zM11 14V9h4v2h5V9h5v2h5V9h4v5"
            ></path>
            <path d="M34 14l-3 3H14l-3-3"></path>
            <path
              strokeLinecap="butt"
              strokeLinejoin="miter"
              d="M31 17v12.5H14V17"
            ></path>
            <path d="M31 29.5l1.5 2.5h-20l1.5-2.5"></path>
            <path fill="none" strokeLinejoin="miter" d="M11 14h23"></path>
          </g>
        </svg>
      );
    case PieceType.WHITE_BISHOP:
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45">
          <g
            fill="none"
            fillRule="evenodd"
            stroke={secondaryColor}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          >
            <g fill={mainColor} strokeLinecap="butt">
              <path d="M9 36c3.39-.97 10.11.43 13.5-2 3.39 2.43 10.11 1.03 13.5 2 0 0 1.65.54 3 2-.68.97-1.65.99-3 .5-3.39-.97-10.11.46-13.5-1-3.39 1.46-10.11.03-13.5 1-1.35.49-2.32.47-3-.5 1.35-1.46 3-2 3-2z"></path>
              <path d="M15 32c2.5 2.5 12.5 2.5 15 0 .5-1.5 0-2 0-2 0-2.5-2.5-4-2.5-4 5.5-1.5 6-11.5-5-15.5-11 4-10.5 14-5 15.5 0 0-2.5 1.5-2.5 4 0 0-.5.5 0 2z"></path>
              <path d="M25 8a2.5 2.5 0 11-5 0 2.5 2.5 0 115 0z"></path>
            </g>
            <path
              strokeLinejoin="miter"
              d="M17.5 26h10M15 30h15m-7.5-14.5v5M20 18h5"
            ></path>
          </g>
        </svg>
      );
    case PieceType.WHITE_KNIGHT:
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45">
          <g
            fill="none"
            fillRule="evenodd"
            stroke={secondaryColor}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          >
            <path
              fill={mainColor}
              d="M22 10c10.5 1 16.5 8 16 29H15c0-9 10-6.5 8-21"
            ></path>
            <path
              fill={mainColor}
              d="M24 18c.38 2.91-5.55 7.37-8 9-3 2-2.82 4.34-5 4-1.042-.94 1.41-3.04 0-3-1 0 .19 1.23-1 2-1 0-4.003 1-4-4 0-2 6-12 6-12s1.89-1.9 2-3.5c-.73-.994-.5-2-.5-3 1-1 3 2.5 3 2.5h2s.78-1.992 2.5-3c1 0 1 3 1 3"
            ></path>
            <path
              fill={secondaryColor}
              d="M9.5 25.5a.5.5 0 11-1 0 .5.5 0 111 0z"
            ></path>
            <path
              fill={secondaryColor}
              strokeWidth="1.5"
              d="M14.933 15.75a.5 1.5 30 11-.866-.5.5 1.5 30 11.866.5z"
            ></path>
          </g>
        </svg>
      );
    case PieceType.WHITE_PAWN:
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45">
          <path
            fill={mainColor}
            stroke={secondaryColor}
            strokeLinecap="round"
            strokeWidth="1.5"
            d="M22.5 9c-2.21 0-4 1.79-4 4 0 .89.29 1.71.78 2.38C17.33 16.5 16 18.59 16 21c0 2.03.94 3.84 2.41 5.03-3 1.06-7.41 5.55-7.41 13.47h23c0-7.92-4.41-12.41-7.41-13.47 1.47-1.19 2.41-3 2.41-5.03 0-2.41-1.33-4.5-3.28-5.62.49-.67.78-1.49.78-2.38 0-2.21-1.79-4-4-4z"
          ></path>
        </svg>
      );
    default:
      return null;
  }
};
