import { nanoid } from "nanoid";
import Button from "../Button/Button";
import styles from "./JournalForm.module.css";
import { useState } from "react";
import cn from "classnames";

export default function JournalForm({ onSubmit }) {
  const [formValid, setFormValid] = useState({
    title: true,
    date: true,
    text: true,
  });

  const addJournalItem = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formProps = Object.fromEntries(formData);
    formProps.id = nanoid();
    let isFormValid = true;

    if (!formProps.title?.trim().length) {
      setFormValid((state) => ({ ...state, title: false }));
      isFormValid = false;
    } else {
      setFormValid((state) => ({ ...state, title: true }));
    }

    if (!formProps.date) {
      setFormValid((state) => ({ ...state, date: false }));
      isFormValid = false;
    } else {
      setFormValid((state) => ({ ...state, date: true }));
    }

    if (!formProps.text?.trim().length) {
      setFormValid((state) => ({ ...state, text: false }));
      isFormValid = false;
    } else {
      setFormValid((state) => ({ ...state, text: true }));
    }

    if (!isFormValid) return;

    onSubmit(formProps);
  };

  return (
    <form className={styles["journal-form"]} onSubmit={addJournalItem}>
      <div className={styles["journal-form__top"]}>
        <input
          className={cn(
            styles["journal-form__input"],
            styles["journal-form__input--title"],
            {
              [styles["journal-form__input--invalid"]]: !formValid.title,
            }
          )}
          type="text"
          name="title"
          placeholder="Введите название заметки"
        />
        <img
          className={styles["journal-form__icon"]}
          src="/icon-trash.svg"
          alt="Иконка удаления"
        />
      </div>

      <label className={styles["journal-form__field"]} htmlFor="date">
        <img
          className={styles["journal-form__field-icon"]}
          src="/icon-calender.svg"
          alt="Иконка календаря"
        />
        <span className={styles["journal-form__field-label"]}>Дата</span>
        <input
          className={cn(styles["journal-form__field-input"], {
            [styles["journal-form__field-input--invalid"]]: !formValid.date,
          })}
          type="date"
          name="date"
          id="date"
        />
      </label>

      <label className={styles["journal-form__field"]} htmlFor="tag">
        <img
          className={styles["journal-form__field-icon"]}
          src="/icon-folder.svg"
          alt="Иконка папки"
        />
        <span className={styles["journal-form__field-label"]}>Метка</span>
        <input
          className={styles["journal-form__field-input"]}
          type="text"
          name="tag"
          id="tag"
        />
      </label>

      <textarea
        className={cn(styles["journal-form__textarea"], {
          [styles["journal-form__textarea--invalid"]]: !formValid.text,
        })}
        name="text"
      />

      <Button text="Сохранить" className={styles["journal-form__submit"]} />
    </form>
  );
}
