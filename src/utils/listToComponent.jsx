export default function listToComponent(list) {
  return list.map((item, index) => <li key={index}>{item}</li>);
}
