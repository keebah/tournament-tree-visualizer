import { Card, Flex, Text, TextField } from "@radix-ui/themes";
import { useContext } from "react";

import { AppContext } from "../context/AppContext";
import { Team } from "../types/app";

export const DisplaySeed = ({
  team,
  seedIndex,
}: {
  team: Team;
  seedIndex: number;
}) => {
  const { updateSeeds } = useContext(AppContext);
  return (
    <Card>
      <Flex>
        <Text>Player 1:</Text>
        <TextField.Root
          size="1"
          onChange={(e) => {
            const player1 = team.player1;
            const updatedPlayer = { ...player1, name: e.target.value };
            const updatedTeam = { ...team, player1: updatedPlayer };
            updateSeeds(seedIndex, updatedTeam);
          }}
          placeholder="Enter player name"
          value={team.player1.name}
        />
      </Flex>
      <Flex>
        <Text>Player 2:</Text>
        <TextField.Root
          size="1"
          placeholder="Enter player name"
          value={team.player2.name}
        />
      </Flex>
    </Card>
  );
};
