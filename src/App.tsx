import React, { useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import LoadData from "./components/LoadData/LoadData";
import { getDummies } from "./utils/getDummies";

function App() {
  const [data, setData] = useState(getDummies());

  const load = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setData((data) => [...data, ...getDummies()]);
  };

  return (
    <div className="App">
      <Header />
      <div className="Cards">
        <div />
        {data.map((elem, idx) => (
          <Card
            title={`${idx} - ${elem.title}`}
            detail={elem.detail}
            key={idx}
          />
        ))}
      </div>
      <LoadData load={load} />
    </div>
  );
}

export default App;
