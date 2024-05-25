import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, message } from "antd";
import { Modal } from 'antd';
import { ReloadData, hideLoading, showLoading } from "../../redux/rootSlice";
import axios from "axios";

const Experiences = () => {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const { experiences } = portfolioData;
  const [showAddEditModel, setShowAddEditModel] = useState(false);
  const [selectedItemForEdit, setSelectedItemForEdit] = useState(null);

  const onFinish = async (values) => {
    try {
      dispatch(showLoading());
      let response;
      if (selectedItemForEdit) {
        // Editing existing experience
        response = await axios.post("/api/portfolio/update-experience", {
          ...values,
          _id: selectedItemForEdit._id
        });
      } else {
        // Adding new experience
        response = await axios.post("/api/portfolio/add-experience", values);
      }

      dispatch(hideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        setShowAddEditModel(false);
        setSelectedItemForEdit(null); // Reset selectedItemForEdit after action
        dispatch(ReloadData(true));
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      message.error(error.message);
      console.log(error.message);
    }
  };

  const onDelete = async (item) => {
    try {
      dispatch(showLoading());
      const response = await axios.post("/api/portfolio/delete-experience", {
        _id: item._id
      });
      dispatch(hideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        setShowAddEditModel(false);
        setSelectedItemForEdit(null); // Reset selectedItemForEdit after action
        dispatch(ReloadData(true));
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      message.error(error.message);
      console.log(error.message);
    }
  };

  return (
    <div>
      <div className="flex justify-end">
        <button
          className="bg-blue-950 text-white px-5 py-2 mt-5"
          onClick={() => {
            setSelectedItemForEdit(null);
            setShowAddEditModel(true);
          }}
        >
          Add Experience
        </button>
      </div>
      <div className="grid grid-cols-4 gap-5">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="shadow border-2 border-gray-400 p-5 flex flex-col"
          >
            <h1 className="text-primary text-xl font-bold">
              {experience.period}
            </h1>
            <hr />
            <h1>Company: {experience.company}</h1>
            <h1>Role: {experience.title}</h1>
            <p>{experience.description}</p>
            <div className="flex justify-end gap-5 mt-5">
              <button
                className="bg-primary text-white px-5 py-2"
                onClick={() => {
                  setSelectedItemForEdit(experience);
                  setShowAddEditModel(true);
                }}
              >
                Edit
              </button>
              <button
                className="bg-red-500 text-white px-5 py-2"
                onClick={() => {
                  onDelete(experience);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <Modal
        visible={showAddEditModel}
        title={selectedItemForEdit ? "Edit Experience" : "Add Experience"}
        footer={null}
        onCancel={() => setShowAddEditModel(false)}
      >
        <Form
          layout="vertical"
          onFinish={onFinish}
          initialValues={selectedItemForEdit || {}}
        >
          <Form.Item name="period" label="Period">
            <Input placeholder="Period" />
          </Form.Item>
          <Form.Item name="company" label="Company">
            <Input placeholder="Company" />
          </Form.Item>
          <Form.Item name="title" label="Title">
            <Input placeholder="Title" />
          </Form.Item>
          <Form.Item name="description" label="Description">
            <Input placeholder="Description" />
          </Form.Item>

          <div className="flex justify-end gap-4">
            <button
              className="bg-red-500 border-primary text-white px-5 py-2"
              onClick={() => setShowAddEditModel(false)}
            >
              Cancel
            </button>
            <button className="bg-primary text-white px-5 py-2" type="submit">
              {selectedItemForEdit ? "Update" : "Add"}
            </button>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default Experiences;
