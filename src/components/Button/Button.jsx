import styles from "./Button.module.css";

export default function Button() {
  const clicked = () => {
    console.log("Clicked");
  };

  return (
    <>
      <button className={`${styles.button} ${styles.accent}`} onClick={clicked}>
        Сохранить
      </button>
    </>
  );
}
