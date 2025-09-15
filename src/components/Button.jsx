import "../styles/button.css";

export default function Button({ text, type }) {
  switch (type) {
    case "primary":
      return <button className="primary">{text}</button>;
    case "secondary":
      return <button className="secondary">{text}</button>;
    default:
      return <button>{text}</button>;
  }
}
