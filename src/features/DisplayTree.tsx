import { Card, Flex } from "@radix-ui/themes";

import { DisplayMatch } from "./DisplayMatch";

export const DisplayTree = () => {
  return (
    <Flex>
      <Flex gap="2" direction="column">
        1. Runde
        <Card>
          <DisplayMatch matchKey="match1" />
        </Card>
        <Card>
          <DisplayMatch matchKey="match2" />
        </Card>
        <Card>
          <DisplayMatch matchKey="match3" />
        </Card>
        <Card>
          <DisplayMatch matchKey="match4" />
        </Card>
      </Flex>
      <Flex gap="2" direction="column">
        1/4 Winner
        <Card>
          <DisplayMatch matchKey="match7" />
        </Card>
        <Card>
          <DisplayMatch matchKey="match8" />
        </Card>
      </Flex>
      <Flex gap="2" direction="column">
        HF
        <Card>
          <DisplayMatch matchKey="match11" />
        </Card>
        <Card>
          <DisplayMatch matchKey="match12" />
        </Card>
      </Flex>
      <Flex gap="2" direction="column">
        Finale
        <Card>
          <DisplayMatch matchKey="match13" />
        </Card>
      </Flex>
      <Flex gap="2" direction="column">
        1/4 Loser
        <Card>
          <DisplayMatch matchKey="match9" />
        </Card>
        <Card>
          <DisplayMatch matchKey="match10" />
        </Card>
      </Flex>
      <Flex gap="2" direction="column">
        1/8 Loser
        <Card>
          <DisplayMatch matchKey="match5" />
        </Card>
        <Card>
          <DisplayMatch matchKey="match6" />
        </Card>
      </Flex>
    </Flex>
  );
};
