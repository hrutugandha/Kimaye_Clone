import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import{Home} from './pages/Homepage/Home'
import { Products } from "./components/Products/Products";
import { Login } from "./pages/Login/Login";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Routes>
        <Route path="/" component={<Home/>} />
        <Route path="/products" component={<Products />}/>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
