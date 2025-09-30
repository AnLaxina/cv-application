import "../styles/button.css";

export default function Button({text, type, onClick}) {
    switch (type) {
        case "link":
            return <button type="button" className="link" onClick={onClick}>{text}</button>;
        case "secondary":
            return <button type="button" className="secondary" onClick={onClick}>{text}</button>;
        case "submit":
            return <button type="submit" className="primary" onClick={onClick}>{text}</button>;
        default:
            return <button type="button" className="primary" onClick={onClick}>{text}</button>;
    }
}
