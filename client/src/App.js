import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import { useEffect } from 'react';
import Loader from './components/loader';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setPortfolioData } from './redux/rootSlice';

function App() {
  const { loading, portfolioData } = useSelector((state) => state.root);
  const dispatch = useDispatch();

  useEffect(() => {
    const getPortfolioData = async () => {
      try {
        const response = await axios.get('/api/portfolio/get-portfolio-data/');
        dispatch(setPortfolioData(response.data));
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching portfolio data:', error);
      }
    };

    getPortfolioData();
  }, [dispatch]); // Added dispatch as dependency

  useEffect(() => {
    console.log(portfolioData);
  }, [portfolioData]);

  return (
    <BrowserRouter>
      {loading ? <Loader /> : null}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
