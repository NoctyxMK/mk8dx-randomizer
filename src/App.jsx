import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ComboRandomizer from "./pages/ComboRandomizer";
import ItemRandomizer from "./pages/ItemRandomizer";

function App() {
  return (
    <Router basename="/mk8dx-randomizer">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/combos" element={<ComboRandomizer />} />
        <Route path="/items" element={<ItemRandomizer />} />
      </Routes>
    </Router>
  );
}

export default App;
