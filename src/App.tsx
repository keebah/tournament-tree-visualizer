import { Card, Flex } from "@radix-ui/themes";

import { AppContextProvider } from "./context/AppContext";
import { DisplaySeeds } from "./features/DisplaySeeds";
import { DisplayTree } from "./features/DisplayTree";
import "./index.css";

function App() {
  return (
    <AppContextProvider>
      <Flex direction="column">
        <Flex>
          <Card>Tournament tree visualizer</Card>
        </Flex>
        <Flex>
          <Card>
            <DisplayTree />
          </Card>
          <Card>
            <DisplaySeeds />
          </Card>
        </Flex>
      </Flex>
    </AppContextProvider>
  );
}

export default App;
