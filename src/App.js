import "./App.css";
// import Data from "./components/Data"
import Data from "./components/Data";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import MainRouter from "./components/MainRouter/MainComponent";
function App() {
  return (
    <>
      <BrowserRouter>
        <MainRouter />
      </BrowserRouter>
    </>
  );
}

export default App;
