import "./App.scss";
import Footer from "./Footer";
import Header from "./Header";
import About from "./About";
import Page from "./Page";
import Content from "./Content";
import Contact from "./Contact";
import { BrowserRouter, Routes, Route } from "react-router";
import Todolist from "./Todolist";
import Signin from "./Signup";
import Signup from "./Signup";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Content />} />
        <Route path="/about" element={<About />} />
        <Route path="/page" element={<Page />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/todolist" element={<Todolist />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
