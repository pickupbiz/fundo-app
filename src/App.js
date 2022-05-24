import { NavBar } from "./components/NavBar";
import { Home } from "./components/Home";
import { News } from "./components/News";
import { Fun } from "./components/Fun";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <News />
      <Fun />
    </div>
  );
}

export default App;
