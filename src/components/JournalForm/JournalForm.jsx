import "./JournalForm.css";
import { useState } from "react";
import Button from "../Button/Button";

export default function JournalForm() {
  const addJournalItem = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formProps = Object.fromEntries(formData);
    console.log(formProps);
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
