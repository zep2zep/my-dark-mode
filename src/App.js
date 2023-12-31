import Home from './Home';
import Navbar from './Navbar';
import About from './pages/About';
import Cartelle from './pages/Cartelle';
import Login from './pages/Login';
import Register from './pages/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/about" element={<About />} />
        <Route path="/pages/cartelle" element={<Cartelle />} />
        <Route path="/pages/login" element={<Login />} />
        <Route path="/pages/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
