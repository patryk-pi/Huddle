import { useState } from "react";
import { Container } from "./components/styles/Container.styled";
import Header from "./components/Header";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Header />
            <Container>
                <h1>Hello World</h1>
            </Container>
        </>
    );
}

export default App;
