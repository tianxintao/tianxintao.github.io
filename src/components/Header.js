import React, { Component } from "react";
import { Header, Navigation } from "react-mdl";
import { Link } from "react-router-dom";
import pdf from "../files/Resume_TianxinTao.pdf"
import "../App.css";

class CreateHeader extends Component {
  render() {
    let tabs_style = { fontSize: 20, color: "azure" };
    console.log("Header rendered");
    return (
      <Header
        className="header-color"
        title={
          <Link className="home-tab" to="/">
            Tianxin's Homepage
          </Link>
        }
        scroll
      >
        <Navigation>
          {/* <Link style={tabs_style} to="/contact">
            Contact
          </Link> */}
          <Link style={tabs_style} to="/project">
            Project
          </Link>
          <a style={tabs_style} href={pdf} target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </Navigation>
      </Header>
    );
  }
}

export default CreateHeader;
