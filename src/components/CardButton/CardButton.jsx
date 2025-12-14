import "./CardButton.css";

export default function CardButton({ children, className }) {
  const cl = "card-btn" + (className ? " " + className : "");
  return <button className={cl}>{children}</button>;
}
