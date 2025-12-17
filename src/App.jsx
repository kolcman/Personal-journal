import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import JournalAddButton from "./components/JournalAddButton/JournalAddButton";
import JournalForm from "./components/JournalForm/JournalForm";
import JournalList from "./components/JournalList/JournalList";
import Body from "./layout/Body/Body";
import LeftPanel from "./layout/LeftPanel/LeftPanel";

function App() {
  const [data, setData] = useState([]);

  const addJournalItem = (item) => {
    setData((prev) => [...prev, item]);
  };

  return (
    <div className="app">
      <LeftPanel>
        <Header />
        <JournalAddButton />
        <JournalList items={data} />
      </LeftPanel>
      <Body>
        <JournalForm onSubmit={addJournalItem} />
      </Body>
    </div>
  );
}

export default App;
