import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./Components/Add";
import Books from "./Components/Books";
import Update from "./Components/Update";
import "./style.css"

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;