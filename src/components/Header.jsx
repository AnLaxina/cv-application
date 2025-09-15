import "../styles/header.css";

import listToComponent from "../utils/listToComponent.jsx";
export default function Header({ title, showExtraOptions = false }) {
  const options = ["New", "Export"];

  if (showExtraOptions) {
    options.push("Load example");
    options.push("Save JSON");
  }
  return (
    <header>
      <h1>{title}</h1>
      <nav>
        <ul className="navigation-links">{listToComponent(options)}</ul>
      </nav>
    </header>
  );
}
