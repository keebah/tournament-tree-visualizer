import { Flex, RadioGroup } from "@radix-ui/themes";
import { useContext } from "react";

import { AppContext, MatchTree } from "../context/AppContext";
import { Match } from "../types/app";

const resolveValue = (match: Match) => {
  if (match.winner === undefined && match.loser === undefined) return "default";
  if (JSON.stringify(match.winner) === JSON.stringify(match.team1))
    return "team1";
  if (JSON.stringify(match.winner) === JSON.stringify(match.team2))
    return "team2";
  return "default";
};

export const DisplayMatch = ({ matchKey }: { matchKey: keyof MatchTree }) => {
  const { matchTree, updateMatchTree } = useContext(AppContext);
  if (!matchTree) {
    return <Flex>Match undefined</Flex>;
  }
  const match = matchTree[matchKey];
  if (!match) return <></>;

  return (
    <RadioGroup.Root
      disabled={match.team1 === undefined || match.team2 === undefined}
      className="RadioGroupRoot"
      value={resolveValue(match)}
      aria-label="View density"
      onValueChange={(v) => {
        if (v === "default") {
          const updatedMatch = {
            ...match,
            winner: undefined,
            loser: undefined,
          };
          updateMatchTree(matchKey, updatedMatch);
          return;
        }
        const winner = v === "team1" ? match.team1 : match.team2;
        const loser = v === "team1" ? match.team2 : match.team1;
        const updatedMatch = { ...match, winner, loser };
        updateMatchTree(matchKey, updatedMatch);
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <RadioGroup.Item className="RadioGroupItem" value="team1" id="r1">
          {match.team1?.player1.name ?? ""} / {match.team1?.player2.name ?? ""}
        </RadioGroup.Item>
        <label className="Label" htmlFor="r1"></label>
      </div>{" "}
      <div style={{ display: "flex", alignItems: "center" }}>
        <RadioGroup.Item className="RadioGroupItem" value="default" id="r2">
          Not played
        </RadioGroup.Item>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <RadioGroup.Item className="RadioGroupItem" value="team2" id="r3">
          {match.team2?.player1.name ?? ""} / {match.team2?.player2.name ?? ""}
        </RadioGroup.Item>
      </div>
    </RadioGroup.Root>
  );
};
