import React from "react";
import "./App.css";
import { Layout, Content } from "react-mdl";
import Main from "./components/main";
import CreateFooter from "./components/Footer";
import CreateHeader from "./components/Header";

function App() {
  // function onMouseOver(event) {
  //   const el = event.target;
  //   el.style.color = "#00ffff";
  // }

  // function onMouseLeave(event) {
  //   const el = event.target;
  //   el.style.color = "azure";
  // }

  // function renderNavigation() {
  //   return (
  //     
  //   );
  // }

  console.log("App starts");
  return (
    <Layout fixedHeader>
      <CreateHeader />
      <Content> 
        <div className="page-content" />
        <Main />
      </Content>
      <CreateFooter />
    </Layout>
  );
}

export default App;
