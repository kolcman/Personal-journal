import styles from "./Header.module.css";

export default function Header() {
  return <img className={styles.logo} src="/public/logo.svg" alt="Логотип" />;
}
