import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form , message} from "antd";
import axios from "axios"

import {showLoading, hideLoading} from "../../redux/rootSlice";
const AdminAbout = () => {
    const dispatch = useDispatch()
  const { portfolioData } = useSelector((state) => state.root);
  const onFinish = async (values) => {
    try {
      const tempSkills = values.skilles.split(',');
      values.skilles = tempSkills
        dispatch(showLoading());      
        const response = await axios.post("/api/portfolio/update-about", {
          ...values,
          _id: portfolioData.about._id
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
        initialValues={{
          ...portfolioData.about,
          skilles:portfolioData.about.skilles.join(",")
        } || {}}
      >
        <Form.Item name="lottieURL" label="Lottie URL">
          <input placeholder="Lottie URL" />
        </Form.Item>
       
        
        <Form.Item name="description1" label="Description">
          <textarea placeholder="Description...." />
        </Form.Item>
        <Form.Item name="description2" label="Description">
          <textarea placeholder="Description...." />
        </Form.Item>
        <Form.Item name="skilles" label="Skills">
          <textarea placeholder="Skilles...." />
        </Form.Item>
        <div className="flex justify-end w-full">
          <button className="px-10 py-2 bg-primary text-white" type="submit" >SAVE</button>
        </div>
      </Form>
    </div>
  );
};

export default AdminAbout;
