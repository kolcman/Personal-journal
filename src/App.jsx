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
  const cards = [
    {
      title: "Подготовка к обновлению курсов",
      date: new Date(),
      text: "Сегодня провёл весь день за...",
    },
    {
      title: "Поход в годы",
      date: new Date(),
      text: "Думал, что очень много време...",
    },
    {
      title: "Первая заметка",
      date: new Date(),
      text: "Создал первую заметку, чтобы ...",
    },
  ];

  return (
    <div className="app">
      <LeftPanel>
        <Header />
        <JournalAddButton />
        <JournalList>
          <CardButton>
            <JournalItem {...cards[0]} />
          </CardButton>
          <CardButton>
            <JournalItem {...cards[1]} />
          </CardButton>
          <CardButton>
            <JournalItem {...cards[2]} />
          </CardButton>
        </JournalList>
      </LeftPanel>
      <Body>
        <h1>Body</h1>
        <JournalForm />
      </Body>
    </div>
  );
}

export default App;
