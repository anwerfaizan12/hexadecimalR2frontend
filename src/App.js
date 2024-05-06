import './App.css';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Posts from './components/Posts';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Define a route for '/posts/:id' to pass the 'id' parameter */}
        <Route path="/posts/:id" element={<Posts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
