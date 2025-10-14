import Header from "./components/Header.jsx";
import Form from "./components/Form.jsx";

function App() {
    return (
        <>
            <Header title="CV Application with Chicken!" showExtraOptions={true}/>
            <Form/>
            <footer>
                <p>2025 AnLaxina</p>
            </footer>
        </>
    );
}

export default App;
