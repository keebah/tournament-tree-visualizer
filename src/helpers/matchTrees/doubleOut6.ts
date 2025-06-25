import { MatchTree } from "../../context/AppContext";
import { Team } from "../../types/app";

export const returnMatchTreeDoubleOut6 = (
  seeds: Team[],
  matchTree?: MatchTree
) => {
  const match1 = {
    team1: seeds[2],
    team2: seeds[5],
    winner: matchTree?.match1?.winner,
    loser: matchTree?.match1?.loser,
  };
  const match2 = {
    team1: seeds[3],
    team2: seeds[5],
    winner: matchTree?.match2?.winner,
    loser: matchTree?.match2?.loser,
  };

  const match3 = {
    team1: seeds[0],
    team2: match1.winner,
    winner: matchTree?.match3?.winner,
    loser: matchTree?.match3?.loser,
  };
  const match4 = {
    team1: seeds[1],
    team2: match2.winner,
    winner: matchTree?.match4?.winner,
    loser: matchTree?.match4?.loser,
  };
  const match5 = {
    team1: match2.loser,
    team2: match3.loser,
    winner: matchTree?.match5?.winner,
    loser: matchTree?.match5?.loser,
  };
  const match6 = {
    team1: match1.loser,
    team2: match4.loser,
    winner: matchTree?.match6?.winner,
    loser: matchTree?.match6?.loser,
  };
  const match7 = {
    team1: match3.winner,
    team2: match4.winner,
    winner: matchTree?.match7?.winner,
    loser: matchTree?.match7?.loser,
  };
  const match8 = {
    team1: match5.winner,
    team2: match6.winner,
    winner: matchTree?.match8?.winner,
    loser: matchTree?.match8?.loser,
  };
  const match9 = {
    team1: match7.loser,
    team2: match8.winner,
    winner: matchTree?.match9?.winner,
    loser: matchTree?.match9?.loser,
  };
  const match10 = {
    team1: match7.winner,
    team2: match9.winner,
    winner: matchTree?.match10?.winner,
    loser: matchTree?.match10?.loser,
  };

  return {
    match1,
    match2,
    match3,
    match4,
    match5,
    match6,
    match7,
    match8,
    match9,
    match10,
  };
};
