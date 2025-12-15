import { useState } from "react";
import "./App.css";
import CardButton from "./components/CardButton/CardButton";
import Header from "./components/Header/Header";
import JournalAddButton from "./components/JournalAddButton/JournalAddButton";
import JournalForm from "./components/JournalForm/JournalForm";
import JournalItem from "./components/JournalItem/JournalItem";
import JournalList from "./components/JournalList/JournalList";
import Body from "./components/layout/Body/Body";
import LeftPanel from "./components/layout/LeftPanel/LeftPanel";

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
        <h1>Body</h1>
        <JournalForm onSubmit={addJournalItem} />
      </Body>
    </div>
  );
}

export default App;
