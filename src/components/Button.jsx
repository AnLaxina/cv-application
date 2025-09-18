import "../styles/button.css";

export default function Button({ text, type, onClick = () => {}}) {
  switch (type) {
    case "link":
      return <button className="link" onClick={onClick}>{text}</button>;
    case "secondary":
      return <button className="secondary" onClick={onClick}>{text}</button>;
    default:
      return <button className="primary" onClick={onClick}>{text}</button>;
  }
}
