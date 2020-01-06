import React from "react";
import "./App.css";
import { Layout, Content } from "react-mdl";
import Main from "./components/main";
import CreateFooter from "./components/Footer";
import CreateHeader from "./components/Header"

function App() {
  console.log("App starts");

  return (
    <div className="App">
      <div>
        <Layout>
          <CreateHeader />
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
          <CreateFooter />
        </Layout>
      </div>
    </div>
  );
}

export default App;
