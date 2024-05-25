import React from "react";
import Header from "../../components/header";
import AdminIntro from "./adminIntro";
import AdminAbout from "./adminAbout";
import Experience from "./experiences"
import Addproject from "./addProject"
import Contact from "./contact"
import { useSelector } from "react-redux";
import { Tabs } from "antd";
const { TabPane } = Tabs;
function Admin() {
  const { portfolioData } = useSelector((state) => state.root);

  return (
    <div>
      <Header />
      {portfolioData && (
        <div className="mt-5 p-5">
          <Tabs defaultActiveKey="1" tabPosition="left">
            <TabPane tab="Intro" key="1">
              <AdminIntro />
            </TabPane>
            <TabPane tab="About" key="2">
              <AdminAbout />
            </TabPane>
            <TabPane tab="Experience" key="3">
              <Experience/>
            </TabPane>
            <TabPane tab="Project" key="4">
              <Addproject/>
            </TabPane>
            <TabPane tab="Contact" key="5">
              <Contact/>
            </TabPane>
          </Tabs>
        </div>
      )}
    </div>
  );
}

export default Admin;
