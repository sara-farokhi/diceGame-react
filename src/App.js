import "./App.css";

import Playground from "./components/Playground";
import States from "./context/States";
import Buttons from "./components/Buttons";

const App = () => {
  return (
    <States>
      <Playground />
    </States>
  );
};

export default App;
