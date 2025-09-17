import Button from "../components/Button.jsx";

export default function listToComponent(list, isButton = false) {
    if(isButton) {
        return list.map((item) => <li key={item}><Button text={item}/></li>)
    }
  return list.map((item) => <li key={item}>{item}</li>);
}
