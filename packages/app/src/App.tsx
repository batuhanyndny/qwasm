import { FC, useEffect } from "react";
import { greet } from "qwasm";

const App: FC = () => {
  useEffect(() => {
    greet();
  }, []);
  return <div>Hello World!</div>;
};

export default App;
