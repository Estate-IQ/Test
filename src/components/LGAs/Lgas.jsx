import { useState } from "react";
import SelectComponent from "./Select";
import JSON from "./Local.json";
import "./styles.css";

const options = JSON;
export default function App() {
  const [selectedOption, setSelectedOption] = useState("");
  return (
    <div className="App">
      <SelectComponent
        options={options}
        onChange={(item) => setSelectedOption(item)}
        selectedKey={selectedOption}
        placeholder={"L.G.A"}
      />
      {/* <p>selected option: {selectedOption}</p> */}
    </div>
  );
}

// SelectedOption to populate keys
