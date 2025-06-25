import { useContext } from "react";

import { AppContext } from "../context/AppContext";
import { DisplaySeed } from "./DisplaySeed";

export const DisplaySeeds = () => {
  const { seeds } = useContext(AppContext);
  return (
    <>
      {seeds?.map((seed, index) => (
        <DisplaySeed team={seed} seedIndex={index} />
      ))}
    </>
  );
};
