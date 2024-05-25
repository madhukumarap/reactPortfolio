import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form , message} from "antd";
import axios from "axios"

import {showLoading, hideLoading} from "../../redux/rootSlice";
const Contact = () => {
    const dispatch = useDispatch()
  const { portfolioData } = useSelector((state) => state.root);
  const onFinish = async (values) => {
    try {
        dispatch(showLoading());
        const response = await axios.post("/api/portfolio/update-contact", {
            ...values,
            _id: portfolioData.contact._id,
        });
        if (!response.data.success) {
            message.success(response.data.message)
        } else {
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
        initialValues={portfolioData?.contact || {}}
      >
        <Form.Item name="name" label="Name">
          <input placeholder="Name...." />
        </Form.Item>
        <Form.Item name="gender" label="Gender">
          <input placeholder="Gender...." />
        </Form.Item>
        <Form.Item name="mobile" label="Mobile">
          <input placeholder="Mobile...." />
        </Form.Item>
        <Form.Item name="email" label="Email">
          <input placeholder="Email...." />
        </Form.Item>
        <Form.Item name="age" label="Age">
          <input placeholder="Age...." />
        </Form.Item>
        <Form.Item name="address " label="Address ">
          <textarea placeholder="Address...." />
        </Form.Item>
        <div className="flex justify-end w-full">
          <button className="px-10 py-2 bg-primary text-white" type="submit" >SAVE</button>
        </div>
      </Form>
    </div>
  );
};

export default Contact;
