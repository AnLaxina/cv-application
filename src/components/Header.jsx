export default function Header({ title, showExtraOptions = false }) {
  const options = [];
  let content = "";

  if (showExtraOptions) {
    content = <p>There are extra options!</p>;
  }
  return (
    <header>
      <h1>{title}</h1>
      {content}
    </header>
  );
}
