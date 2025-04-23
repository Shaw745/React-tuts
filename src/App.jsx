import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Store from "./Pages/Store";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Error404 from "./Pages/Error404";
import Login from "./Pages/Login";
import Timeline from "./Pages/Timeline";
import Singletweet from "./Pages/Singletweet";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/store" element={<Store />} />
          <Route path="/login" element={<Login />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/timeline/:id" element={<Singletweet />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
