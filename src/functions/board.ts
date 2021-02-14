import { PieceType } from '../types/PieceType';

export type BoardType = PieceType[];

export function newBoard(): PieceType[] {
  const emptyRank = new Array(8).fill(PieceType.EMPTY);
  const bottomRank = [
    PieceType.WHITE_ROOK,
    PieceType.WHITE_KNIGHT,
    PieceType.WHITE_BISHOP,
    PieceType.WHITE_QUEEN,
    PieceType.WHITE_KING,
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

export function indexToRF(index: number): [number, number] {
  const rank = 8 - Math.floor(index / 8);
  const file = (index % 8) + 1;
  return [rank, file];
}

export function RFToIndex(rank: number, file: number): number | undefined {
  if (rank < 1 || rank > 8 || file < 1 || file > 8) {
    return undefined;
  }

  return (8 - rank) * 8 + file - 1;
}

export function indexToAN(index: number) {
  const [rank, file] = indexToRF(index);
  return String.fromCharCode(96 + file) + rank;
}

export function ANToIndex(notation: string) {
  const rank = parseInt(notation.charAt(1));
  const file = notation.charCodeAt(0) - 97;
  return rank * 8 - 1 + file;
}

export function possibleMoves(board: BoardType, index: number): number[] {
  const piece = board[index];
  const [rank, file] = indexToRF(index);
  let moves: (number | undefined)[] = [];

  const addHV = () => {
    for (let i = file; i > 0; i--) {
      moves.push(RFToIndex(rank, i));
    }

    for (let i = file; i <= 8; i++) {
      moves.push(RFToIndex(rank, i));
    }

    for (let i = rank; i > 0; i--) {
      moves.push(RFToIndex(i, file));
    }

    for (let i = rank; i <= 8; i++) {
      moves.push(RFToIndex(i, file));
    }
  };

  const addDiagonal = () => {
    for (let i = file, j = rank; i > 0 && j > 0; i--, j--) {
      moves.push(RFToIndex(j, i));
    }

    for (let i = file, j = rank; i > 0 && j <= 8; i--, j++) {
      moves.push(RFToIndex(j, i));
    }

    for (let i = file, j = rank; i <= 8 && j > 0; i++, j--) {
      moves.push(RFToIndex(j, i));
    }

    for (let i = file, j = rank; i <= 8 && j <= 8; i++, j++) {
      moves.push(RFToIndex(j, i));
    }
  };

  switch (piece) {
    case PieceType.BLACK_PAWN:
      moves = [index + 8];

      if (rank === 7) {
        moves.push(index + 16);
      }
      break;
    case PieceType.WHITE_PAWN:
      moves = [index - 8];

      if (rank === 2) {
        moves.push(index - 16);
      }
      break;
    case PieceType.WHITE_ROOK:
    case PieceType.BLACK_ROOK:
      addHV();
      break;
    case PieceType.WHITE_KNIGHT:
    case PieceType.BLACK_KNIGHT:
      moves.push(RFToIndex(rank - 1, file - 2));
      moves.push(RFToIndex(rank + 1, file - 2));
      moves.push(RFToIndex(rank - 1, file + 2));
      moves.push(RFToIndex(rank + 1, file + 2));
      moves.push(RFToIndex(rank - 2, file - 1));
      moves.push(RFToIndex(rank - 2, file + 1));
      moves.push(RFToIndex(rank + 2, file - 1));
      moves.push(RFToIndex(rank + 2, file + 1));
      break;
    case PieceType.WHITE_BISHOP:
    case PieceType.BLACK_BISHOP:
      addDiagonal();
      break;
    case PieceType.WHITE_QUEEN:
    case PieceType.BLACK_QUEEN:
      addHV();
      addDiagonal();
      break;
    case PieceType.WHITE_KING:
    case PieceType.BLACK_KING:
      moves.push(RFToIndex(rank - 1, file));
      moves.push(RFToIndex(rank + 1, file));
      moves.push(RFToIndex(rank, file - 1));
      moves.push(RFToIndex(rank, file + 1));
      moves.push(RFToIndex(rank - 1, file - 1));
      moves.push(RFToIndex(rank - 1, file + 1));
      moves.push(RFToIndex(rank + 1, file - 1));
      moves.push(RFToIndex(rank + 1, file + 1));
      break;
  }

  const validMoves: number[] = [];
  for (const index of moves) {
    if (typeof index !== 'number') {
      continue;
    }

    validMoves.push(index);
  }

  return validMoves;
}
