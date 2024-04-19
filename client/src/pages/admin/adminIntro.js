import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form , message} from "antd";
import axios from "axios"

import {showLoading, hideLoading} from "../../redux/rootSlice";
const AdminIntro = () => {
    const dispatch = useDispatch()
  const { portfolioData } = useSelector((state) => state.root);
  const onFinish = async (values) => {
    try {
        dispatch(showLoading());      
        const response = await axios.post("/update-intro", {
          ...values,
          _id: portfolioData.intro._id,
        });
        if (!response.data.success) {
          message.success(response.data.message)
        }else{
          message.success(response.data.message)
        }
    } catch (error) {
        dispatch(hideLoading());
        message.error(error.message);
        
        console.log(error.message);
    }
  };


  
  return (
    <div>
      <Form
        onFinish={onFinish}
        layout="vertical"
        initialValues={portfolioData?.intro || {}}
      >
        <Form.Item name="welcometText" label="welcomeText">
          <input placeholder="welcomeText...." />
        </Form.Item>
        <Form.Item name="firstName" label="FirstName">
          <input placeholder="FirstName...." />
        </Form.Item>
        <Form.Item name="lastName" label="LastName">
          <input placeholder="LastName...." />
        </Form.Item>
        <Form.Item name="caption" label="Caption">
          <input placeholder="Caption...." />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <textarea placeholder="Description...." />
        </Form.Item>
        <div className="flex justify-end w-full">
          <button className="px-10 py-2 bg-primary text-white" type="submit" >SAVE</button>
        </div>
      </Form>
    </div>
  );
};

export default AdminIntro;
