export default function listToComponent(list) {
  return list.map((item) => <li key={item}>{item}</li>);
}
