import { hot } from "react-hot-loader/root";
import Test from "./Components/Test";

const App = () => {
    return (
        <div>
            <h1>Hello</h1>
            <Test></Test>
        </div>
    )
}

export default hot(App);