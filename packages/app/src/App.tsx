import { FC, useEffect } from "react";
import { greet } from "qwasm";

const App: FC = () => {
  useEffect(() => {
    greet();
  }, []);
  return <div> HW</div>;
};

export default App;
