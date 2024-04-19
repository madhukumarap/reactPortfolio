import React from "react";
import Header from "../../components/header";
import AdminIntro from "./adminIntro";
import AdminAbout from "./adminAbout";
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
          <Tabs defaultActiveKey="1">
            <TabPane tab="Intro" key="1">
              <AdminIntro />
            </TabPane>
            <TabPane tab="About" key="2">
              <AdminAbout />
            </TabPane>
          </Tabs>
        </div>
      )}
    </div>
  );
}

export default Admin;
