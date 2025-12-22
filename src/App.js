import { Routes, Route } from 'react-router-dom';
import "./App.css"
import Main from './pages/Main/Main.js';
import Santaboard from './pages/Santaboard/Santaboard.js';
import Coinsinger from './pages/Coinsinger/Coinsinger.js';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/santaboard" element={<Santaboard />} />
      <Route path="/coinsinger" element={<Coinsinger />} />
    </Routes>
  );
}

export default App;
