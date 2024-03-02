import { BrowserRouter,Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home"
import { useState } from 'react';
import Loader from './components/loader';
function App() {
  const [showLoading, setShowLoading] = useState(false);
  return (
    <BrowserRouter>
    {showLoading? <Loader/>:null}
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
