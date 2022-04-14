import Header from "./components/header/index";
import Home from "./pages/home/index";
import Footer from "./components/footer/index";
import Information from "./pages/information/index";
import Behavarior from './pages/behavarior/index'
import Anatomy from './pages/anatomy/index'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-main bg-contain top-0 max-w-full xl:bg-cover mx-auto lg:-mt-5">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/information" element={<Information />} />
          <Route path="/behavarior" element={<Behavarior />} />
          <Route path="/anatomy" element={<Anatomy />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
