import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Todo from "./Component/AddTodo";
import Layout from "./Component/Layout";
import Home from "./Component/Home";
import Counter from "./Component/Counter";
import MainAccordion from "./Component/accordion/mainAccordion";
import SelectExample from "./Component/SelectExample";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="todo" element={<Todo />} />
          <Route path="counter" element={<Counter />} />
          <Route path="accordion" element={<MainAccordion />} />
          <Route path="select-example" element={<SelectExample />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
