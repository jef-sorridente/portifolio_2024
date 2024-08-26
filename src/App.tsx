import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles";
import Rotas from "./routes";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <div className="container">
        <Rotas />
      </div>
    </BrowserRouter>
  );
}

export default App;
