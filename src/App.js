import './App.css';
import { BrowserRouter } from "react-router-dom";
import { MyRoutes } from "./routes/Routes";

function App() {
  return (
    <BrowserRouter>
      <MyRoutes/>
    </BrowserRouter>
  );
}

export default App;
