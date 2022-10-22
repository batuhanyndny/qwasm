import { FC, useEffect } from "react";
import { greet } from "qwasm";

const App: FC = () => {
  useEffect(() => {
    console.log("asdfa");
    greet();
  }, []);
  return <div> HW</div>;
};

export default App;
