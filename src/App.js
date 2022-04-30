import Header from "./components/header/index";
import Home from "./pages/home/index";
import Footer from "./components/footer/index";
import Information from "./pages/information/index";
import Behavarior from "./pages/behavarior/index";
import Anatomy from "./pages/anatomy/index";
import Mating from './pages/berkembangbiak'
import Movie from './pages/movie'
import Gallery from './pages/gallery'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Store from "./redux/Store";
import {Provider} from 'react-redux'
import Signin from "./pages/signin";
import Detail from "./pages/detail";
import Register from "./pages/register";

function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <div className="bg-main bg-contain top-0 max-w-full xl:bg-cover mx-auto lg:-mt-5">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/scientific" element={<Information />} />
            <Route path="/behavarior" element={<Behavarior />} />
            <Route path="/anatomy" element={<Anatomy />} />
            <Route path="/mating" element={<Mating />} />
            <Route path="/movie" element={<Movie />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Signin />} />
            <Route path="/detail" element={<Detail />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
