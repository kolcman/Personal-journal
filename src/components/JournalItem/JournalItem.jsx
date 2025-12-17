import styles from "./JournalItem.module.css";

export default function JournalItem({ title, date, text }) {
  const formatDate = new Intl.DateTimeFormat("ru-RU").format(
    new Date(date + "T12:00")
  );

  return (
    <>
      <h3 className={`${styles.journalItem__title}`}>{title}</h3>
      <div className={`${styles.journalItem__body}`}>
        <span className={`${styles.journalItem__date}`}>{formatDate}</span>
        <p className={`${styles.journalItem__text}`}>{text}</p>
      </div>
    </>
  );
}
