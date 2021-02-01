import { PieceType } from '../types/PieceType';

export type BoardType = PieceType[];

export function newBoard(): PieceType[] {
  const emptyRank = new Array(8).fill(PieceType.EMPTY);
  const bottomRank = [
    PieceType.WHITE_ROOK,
    PieceType.WHITE_KNIGHT,
    PieceType.WHITE_BISHOP,
    PieceType.WHITE_KING,
    PieceType.WHITE_QUEEN,
    PieceType.WHITE_BISHOP,
    PieceType.WHITE_KNIGHT,
    PieceType.WHITE_ROOK,
  ];
  const pawnRank = new Array(8).fill(PieceType.WHITE_PAWN);

  return [
    ...(bottomRank.map(piece => piece | 0x10) as PieceType[]),
    ...(pawnRank.map(piece => piece | 0x10) as PieceType[]),
    ...emptyRank,
    ...emptyRank,
    ...emptyRank,
    ...emptyRank,
    ...pawnRank,
    ...bottomRank,
  ];
}

export function indexToAN(index: number) {
  const rank = 8 - Math.floor(index / 8);
  const file = String.fromCharCode(97 + (index % 8));
  return file + rank;
}

export function ANToIndex(notation: string) {
  const rank = parseInt(notation.charAt(1));
  const file = notation.charCodeAt(0) - 97;
  return rank * 8 - 1 + file;
}

export function possibleMoves(board: BoardType, index: number): number[] {
  const piece = board[index];
  const rank = 8 - Math.floor(index / 8);
  const file = index % 8;
  let moves: number[] = [];

  switch (piece) {
    case PieceType.BLACK_PAWN:
      moves = [index + 8];

      if (file === 7) {
        moves.push(index + 16);
      }
      break;
    case PieceType.WHITE_PAWN:
      moves = [index - 8];

      if (file === 2) {
        moves.push(index - 16);
      }
      break;
  }

  return moves;
}
