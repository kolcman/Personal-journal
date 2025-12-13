import "./App.css";
import Button from "./components/Button/Button";
import CardButton from "./components/CardButton/CardButton";
import JournalItem from "./components/JournalItem/JournalItem";

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

function App() {
  return (
    <>
      <CardButton>
        <JournalItem {...cards[0]} />
      </CardButton>
      <CardButton>
        <JournalItem {...cards[1]} />
      </CardButton>
      <CardButton>
        <JournalItem {...cards[2]} />
      </CardButton>
      <Button />
    </>
  );
}

export default App;
