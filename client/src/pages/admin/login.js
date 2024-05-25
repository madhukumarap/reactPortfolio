import { message } from 'antd';
import axios from 'axios';
import React, { useState } from 'react';
import { hideLoading, showLoading } from '../../redux/rootSlice';
import { useDispatch } from 'react-redux';

const Login = () => {
  const [user, setUser] = useState({
    username: '',
    password: '',
  });
  const dispatch = useDispatch()
  const login = async() =>{
    try {
        dispatch(showLoading())
        const response = await axios.post("/api/portfolio/admin-login", user)
        dispatch(hideLoading())
        if(response.data.sucess){
            message.success(response.data.message)
            localStorage.setItem('token',JSON.stringify(response.data))
            window.location.href ="/admin"
            
        }else{
            message.error(response.data.message)
            
        }

    } catch (error) {
         message.error(error.response?.data?.message || error.message);
      dispatch(hideLoading());
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login logic here
    console.log('User:', user);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Admin Madhu</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              value={user.username}
              onChange={(e)=>setUser({...user, username:e.target.value})}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={user.password}
              onChange={(e)=>setUser({...user, password:e.target.value})}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              onClick={login}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
