import { createContext, ReactElement, useState } from "react";

import { returnMatchTreeDoubleOut12 } from "../helpers/matchTrees/doubleOut12";
import { Match, Team } from "../types/app";

export type MatchTree = {
  match1?: Match;
  match2?: Match;
  match3?: Match;
  match4?: Match;
  match5?: Match;
  match6?: Match;
  match7?: Match;
  match8?: Match;
  match9?: Match;
  match10?: Match;
  match11?: Match;
  match12?: Match;
  match13?: Match;
};

export type AppContextType = {
  seeds?: Team[];
  updateSeeds: (seedIndex: number, updatedTeam: Team) => void;
  matchTree?: MatchTree;
  updateMatchTree: (matchKey: keyof MatchTree, updatedMatch: Match) => void;
};

export const AppContext = createContext<AppContextType>({
  seeds: [],
  updateSeeds: () => {},
  matchTree: undefined,
  updateMatchTree: () => {},
});

export const AppContextProvider = ({
  children,
}: {
  children: ReactElement;
}) => {
  const [seeds, setSeeds] = useState<Team[]>([
    { player1: { name: "Kunst" }, player2: { name: "Paul" } },
    { player1: { name: "Bock" }, player2: { name: "Lippmann" } },
    { player1: { name: "Ferger" }, player2: { name: "Schneider" } },
    { player1: { name: "Kotzan" }, player2: { name: "Schwarz" } },
    { player1: { name: "Barber" }, player2: { name: "Gernert" } },
    { player1: { name: "Behlen" }, player2: { name: "Schulz" } },
    { player1: { name: "Christ" }, player2: { name: "Zobrist" } },
    { player1: { name: "Dreßen" }, player2: { name: "Jancar" } },
  ]);

  const [matchTree, setMatchTree] = useState(
    returnMatchTreeDoubleOut12(seeds, undefined)
  );

  // because I might want to change this in the future for the app to be more flexible
  const returnTree = returnMatchTreeDoubleOut12;

  const updateMatchTree = (matchKey: string, updatedMatch: Match) => {
    setMatchTree((prev) => {
      const updatedMatchTree = { ...prev, [matchKey]: updatedMatch };
      const recalculatedMatchTree = returnTree(seeds, updatedMatchTree);
      return recalculatedMatchTree;
    });
  };

  const updateSeeds = (seedIndex: number, updatedSeed: Team) => {
    setSeeds((prev) => {
      prev.splice(seedIndex, 1, updatedSeed);
      setMatchTree((currentMatchTree) => {
        const recalculatedMatchTree = returnTree(prev, currentMatchTree);
        return recalculatedMatchTree;
      });
      return prev;
    });
  };
  return (
    <AppContext.Provider
      value={{ seeds, matchTree, updateMatchTree, updateSeeds }}
    >
      {children}
    </AppContext.Provider>
  );
};
