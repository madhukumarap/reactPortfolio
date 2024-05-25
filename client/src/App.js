import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import { useEffect } from 'react';
import Loader from './components/loader';
import { useDispatch, useSelector } from 'react-redux';
import { ReloadData, hideLoading, showLoading, setPortfolioData } from './redux/rootSlice';
import Admin from "./pages/admin";
import Login from "./pages/admin/login"
import axios from 'axios';
import { message } from 'antd';

axios.defaults.baseURL = "http://localhost:8000/";

function App() {
  const { loading, portfolioData, reloadData } = useSelector((state) => state.root);
  const dispatch = useDispatch();

  const getPortfolioData = async () => {
    try {
      dispatch(showLoading());
      const response = await axios.get('/api/portfolio/get-portfolio-data/');
      dispatch(setPortfolioData(response.data));
      // dispatch(ReloadData(false));
      dispatch(hideLoading());
      console.log(response.data);
    } catch (error) {
      dispatch(hideLoading());
      console.error('Error fetching portfolio data:', error);
      message.error('Error fetching portfolio data');
    }
  };

  useEffect(() => {
    getPortfolioData();
  }, [dispatch]);

  useEffect(() => {
    if (reloadData) {
      getPortfolioData();
    }
  }, [reloadData, dispatch]);

  useEffect(() => {
    console.log(portfolioData);
  }, [portfolioData]);

  return (
    <BrowserRouter>
      {loading && <Loader />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        {/* <Route path="/admin-login" element={<Login />} /> */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
