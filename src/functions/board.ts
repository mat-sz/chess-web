import { PieceType } from '../types/PieceType';

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
