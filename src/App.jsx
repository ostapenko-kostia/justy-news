import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";

export default function App() {
    return (
        <>
            <Header></Header>
            <div className="container">
                <Main />
            </div>
        </>
    );
}
