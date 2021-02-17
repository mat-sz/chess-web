export enum PieceType {
  EMPTY = 0x00,
  WHITE_PAWN = 0x01,
  WHITE_ROOK = 0x02,
  WHITE_KNIGHT = 0x03,
  WHITE_BISHOP = 0x04,
  WHITE_QUEEN = 0x05,
  WHITE_KING = 0x06,
  BLACK_PAWN = 0x11,
  BLACK_ROOK = 0x12,
  BLACK_KNIGHT = 0x13,
  BLACK_BISHOP = 0x14,
  BLACK_QUEEN = 0x15,
  BLACK_KING = 0x16,
}

export const pieceToLetter = {
  [PieceType.WHITE_PAWN]: 'P',
  [PieceType.WHITE_ROOK]: 'R',
  [PieceType.WHITE_KNIGHT]: 'N',
  [PieceType.WHITE_BISHOP]: 'B',
  [PieceType.WHITE_QUEEN]: 'Q',
  [PieceType.WHITE_KING]: 'K',
  [PieceType.BLACK_PAWN]: 'p',
  [PieceType.BLACK_ROOK]: 'r',
  [PieceType.BLACK_KNIGHT]: 'n',
  [PieceType.BLACK_BISHOP]: 'b',
  [PieceType.BLACK_QUEEN]: 'q',
  [PieceType.BLACK_KING]: 'k',
  [PieceType.EMPTY]: '',
};

export const letterToPiece: Record<string, PieceType> = Object.keys(
  pieceToLetter
).reduce((prev: any, key: string) => {
  prev[(pieceToLetter as any)[key]] = key;
  return prev;
}, {});
