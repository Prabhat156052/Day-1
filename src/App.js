import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Todo from "./Component/todo/AddTodo";
import Layout from "./Component/layout/Layout";
import Home from "./Component/Home";
import Counter from "./Component/counter/Counter";
import MainAccordion from "./Component/accordion/mainAccordion";
import SelectExample from "./Component/Select-example/SelectExample";
import Modal from "./Component/Modal";

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
