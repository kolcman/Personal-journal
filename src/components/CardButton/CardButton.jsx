import styles from "./CardButton.module.css";

export default function CardButton({ children }) {
  return <button className={`${styles.cardButton}`}>{children}</button>;
}
