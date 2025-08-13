import "./App.css";
import Count from "./components/Count";
import Text from "./components/Text";

import data from "./data.json";

function App() {
  return (
    <>
      {data.names.map((i) => (
        <Text text={i} />
      ))}
      {/* <Text text="Hop" />
      <Text text="Bof" /> */}
      <Count />
    </>
  );
}

export default App;
