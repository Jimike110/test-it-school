import { Route, Routes } from 'react-router';
import './App.css';
import Home from './pages/home/Home';

function App() {
  return (
    
    <Routes>
      <Route index element={<Home />}></Route>
    </Routes>
  );
}

export default App;
