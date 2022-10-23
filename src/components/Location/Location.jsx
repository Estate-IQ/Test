import { useState } from "react";
import SelectComponent from "./Select";
import JSON from "./Country.json";
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
        placeholder={"Location"}
      />
      {/* <p>selected option: {selectedOption}</p> */}
    </div>
  );
}

// SelectedOption to populate keys
