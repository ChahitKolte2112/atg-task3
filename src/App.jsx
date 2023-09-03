import "./App.css";
import Home from "./Component/Home";
import Spinner from "./Component/Spinner";
import { useSelector } from "react-redux";
function App() {
    const loader = useSelector((state) => state.loader.loader);
    return (
        <>
            {loader && <Spinner />}
            <Home></Home>
        </>
    );
}

export default App;
