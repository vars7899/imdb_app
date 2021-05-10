import { GlobalProvider } from "./context/GlobalState";
import Header from "./components/Header/Header";
import Nominated from "./components/Nominated/Nominated";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
    return (
        <GlobalProvider>
            <div className="app">
                <Header />
                <Nominated />
            </div>
        </GlobalProvider>
    );
}
// }

export default App;
