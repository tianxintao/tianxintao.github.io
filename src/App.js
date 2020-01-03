import React from "react";
import "./App.css";
import { Layout, Header, Navigation, Content } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";
import CreateFooter from "./components/footer";

function App() {
  console.log("App starts");
  let tabs_style={fontSize:20 ,color:"azure"};

  return (
    <div className="App">
      <div>
        <Layout>
          <Header className="header-color" title={
          <Link className="home-tab" to="/">Home</Link>
          } scroll>
          {/* <Header title="Title" scroll> */}
            <Navigation>
              <Link style={tabs_style} to="/resume">Resume</Link>
              <Link style={tabs_style} to="/contact">Contact</Link>
              <Link style={tabs_style} to="/project">Project</Link>
            </Navigation>
          </Header>
          {/* <Drawer title="Title">
            <Navigation>
              <a href="#">Link</a>
              <a href="#">Link</a>
              <a href="#">Link</a>
              <a href="#">Link</a>
            </Navigation>
          </Drawer> */}
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
