import { useState } from "react";
import Header from "./components/Header";
import Map from "./components/Map";
import Output from "./components/Output";

function App() {
  const [input, setInput] = useState("");
  const [data, setData] = useState({});

  return (
    <div className="relative">
      <Header input={input} setInput={setInput} data={data} setData={setData} />
      <Output data={data} />
      <Map input={input} setInput={setInput} setData={setData} />
    </div>
  );
}

export default App;
