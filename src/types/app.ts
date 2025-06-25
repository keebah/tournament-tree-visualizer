export type Player = {
  name: string;
};

export type Team = {
  player1: Player;
  player2: Player;
};

export type Match = {
  team1?: Team;
  team2?: Team;
  winner?: Team;
  loser?: Team;
};
