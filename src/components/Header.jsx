import "../styles/header.css";

import listToComponent from "../utils/listToComponent.jsx";

import Button from "./Button.jsx";

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
      <Button text="Chicken" type="primary" />
      <Button text="Chicken Nugget" type="secondary" />
    </header>
  );
}
