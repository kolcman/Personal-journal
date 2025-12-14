import CardButton from "../CardButton/CardButton";
import "./JournalAddButton.css";

export default function JournalAddButton() {
  return (
    <CardButton className="journal-add">
      <img
        className="journal-add__icon"
        src="/public/plus.svg"
        alt="Добавить воспоминание"
      />
      <span className="journal-add__text">Новое воспоминание</span>
    </CardButton>
  );
}
