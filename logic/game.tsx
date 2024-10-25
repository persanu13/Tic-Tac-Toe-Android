export enum PlayerType {
  X,
  O,
  None,
}

export enum GameMode {
  SinglePlayer,
  MultiPlayer,
  None,
}

export type Point = {
  x: number;
  y: number;
};

export const PlayerTypeToString = (playerType: PlayerType): string => {
  switch (playerType) {
    case PlayerType.X:
      return "x";
    case PlayerType.O:
      return "o";
    case PlayerType.None:
      return "";
    default:
      return "";
  }
};

export class TicTacToeLogic {
  private table: number[][];
  private player1: PlayerType;
  private player2: PlayerType;
  private currentPlayer: PlayerType;
  private gameEnd: boolean;
  private moveCount: number;

  constructor(tableSize: number, firstPlayer: PlayerType) {
    this.table = new Array(tableSize)
      .fill(null)
      .map(() => new Array(tableSize).fill(PlayerType.None));
    this.player1 = firstPlayer;
    this.player2 = firstPlayer === PlayerType.X ? PlayerType.O : PlayerType.X;
    this.currentPlayer = this.player1;
    this.gameEnd = false;
    this.moveCount = 0;
  }
  // Metodă privată

  private isInTable(point: Point): boolean {
    return (
      point.x >= 0 &&
      point.x < this.table.length &&
      point.y >= 0 &&
      point.y < this.table.length
    );
  }

  private switchPlayer(): void {
    this.currentPlayer =
      this.currentPlayer === this.player1 ? this.player2 : this.player1;
  }

  private isGameEnd(point: Point): boolean {
    const countTo: number = this.table.length === 3 ? 3 : 4;
    const playerType: PlayerType = this.table[point.y][point.x];

    const direction = [
      { row: 0, col: 1 },
      { row: 1, col: 0 },
      { row: 1, col: 1 },
      { row: 1, col: -1 },
    ];
    for (let dr of direction) {
      let count = 1;
      const queuePoz: Point[] = [point];
      const queueNeg: Point[] = [point];
      while (queuePoz.length != 0) {
        const currentPoint: Point | undefined = queuePoz.shift();
        const newPoint: Point = {
          x: currentPoint!.x + dr.col,
          y: currentPoint!.y + dr.row,
        };
        if (!this.isInTable(newPoint)) break;
        if (this.table[newPoint.y][newPoint.x] !== playerType) break;
        queuePoz.push(newPoint);
        count++;
      }
      while (queueNeg.length != 0) {
        const currentPoint: Point | undefined = queueNeg.shift();
        const newPoint: Point = {
          x: currentPoint!.x - dr.col,
          y: currentPoint!.y - dr.row,
        };
        if (!this.isInTable(newPoint)) break;
        if (this.table[newPoint.y][newPoint.x] !== playerType) break;
        queueNeg.push(newPoint);
        count++;
      }
      if (count >= countTo) return true;
    }

    if (this.isDrawn()) return true;
    return false;
  }

  // Metodă publică
  public move(point: Point): boolean {
    if (this.table[point.y][point.x] != PlayerType.None) return false;
    if (this.gameEnd) return false;
    this.table[point.y][point.x] = this.currentPlayer;
    this.moveCount++;
    this.switchPlayer();
    this.gameEnd = this.isGameEnd(point);
    return true;
  }
  public resetGame(): void {
    this.table = new Array(this.table.length)
      .fill(null)
      .map(() => new Array(this.table.length).fill(PlayerType.None));
    this.moveCount = 0;
    this.currentPlayer = this.player1;
    this.gameEnd = false;
  }

  public isDrawn(): boolean {
    return this.moveCount == this.table.length * this.table.length;
  }

  public getGameEnd(): boolean {
    return this.gameEnd;
  }

  public getGameTable(): PlayerType[][] {
    return this.table.map((row) => [...row]);
  }
}
