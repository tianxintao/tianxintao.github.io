import React from "react";
import "./App.css";
import { Layout, Content, Navigation, Header, Drawer } from "react-mdl";
import { Link } from "react-router-dom";
import Main from "./components/main";
import CreateFooter from "./components/Footer";
import pdf from "./files/Resume_TianxinTao.pdf";

function App() {
  function onMouseOver(event) {
    const el = event.target;
    el.style.color = "#00ffff";
  }

  function onMouseLeave(event) {
    const el = event.target;
    el.style.color = "azure";
  }

  function renderNavigation() {
    return (
      <Navigation>
        <Link
          style={tabs_style}
          onMouseEnter={event => onMouseOver(event)}
          onMouseLeave={event => {
            onMouseLeave(event);
          }}
          to="/project"
        >
          Project
        </Link>
        <a
          style={tabs_style}
          onMouseEnter={event => onMouseOver(event)}
          onMouseLeave={event => {
            onMouseLeave(event);
          }}
          href={pdf}
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </Navigation>
    );
  }

  console.log("App starts");
  let tabs_style = { fontSize: 16, color: "azure" };
  return (
    <Layout>
      <Header
        className="header-color"
        title={
          <Link
            className="home-tab"
            to="/"
            onMouseEnter={event => onMouseOver(event)}
            onMouseLeave={event => {
              onMouseLeave(event);
            }}
          >
            Tianxin's Homepage
          </Link>
        }
        style={{ margin: "none" }}
        scroll
      >
        {renderNavigation()}
      </Header>
      <Drawer
        style={{ backgroundColor: "#2193b0" }}
        title={
          <Link
            className="home-tab"
            to="/"
            onMouseEnter={event => onMouseOver(event)}
            onMouseLeave={event => {
              onMouseLeave(event);
            }}
          >
            Home
          </Link>
        }
      >
        {renderNavigation()}
      </Drawer>
      <Content>
        <div className="page-content" />
        <Main />
      </Content>
      <CreateFooter />
    </Layout>
  );
}

export default App;
