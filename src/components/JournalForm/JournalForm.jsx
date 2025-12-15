import { nanoid } from "nanoid";
import Button from "../Button/Button";
import "./JournalForm.css";

export default function JournalForm({ onSubmit }) {
  const addJournalItem = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formProps = Object.fromEntries(formData);
    formProps.id = nanoid();
    formProps.date = new Date(formProps.date + "T12:00");
    onSubmit(formProps);
  };

  return (
    <form className="journal-form" onSubmit={addJournalItem}>
      <input type="text" name="title" />
      <input type="date" name="date" />
      <input type="text" name="tag" />
      <textarea name="text" />
      <Button text="Сохранить" />
    </form>
  );
}
