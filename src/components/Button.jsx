import "../styles/button.css";

export default function Button({ text, type }) {
  switch (type) {
    case "link":
      return <button className="link">{text}</button>;
    case "secondary":
      return <button className="secondary">{text}</button>;
    default:
      return <button className="primary">{text}</button>;
  }
}
