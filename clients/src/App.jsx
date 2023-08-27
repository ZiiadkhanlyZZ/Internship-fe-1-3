import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Articles from './Pages/Articles';
import AddData from './Pages/AddData/AddData';
import Welcom from './Pages/Welcome/Welcom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcom />} />
        <Route path="/articles" element={<Home />} />
        <Route path="/articles/:id" element={<Articles />} />
        <Route path="/articles/add" element={<AddData />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
