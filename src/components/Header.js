import React, { Component } from "react";
import { Header, Navigation, Layout } from "react-mdl";
import { Link } from "react-router-dom";
import pdf from "../files/Resume_TianxinTao.pdf";
import "../App.css";

class CreateHeader extends Component {
  constructor(props) {
    super(props);
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  onMouseOver(event) {
    const el = event.target;
    el.style.color = "#00ffff";
  }

  onMouseLeave(event) {
    const el = event.target;
    el.style.color = "azure";
  }

  render() {
    let tabs_style = { fontSize: 30, color: "azure" };
    console.log("Header rendered");
    return (
      <Layout fixedHeader style={{paddingBottom:"200px"}}>
        <Header
          className="header-color"
          title={
            <Link
              className="home-tab"
              to="/"
              onMouseEnter={event => this.onMouseOver(event)}
              onMouseLeave={event => {
                this.onMouseLeave(event);
              }}
            >
              Tianxin's Homepage
            </Link>
          }
          scroll
        >
          <Navigation>
            <Link
              style={tabs_style}
              onMouseEnter={event => this.onMouseOver(event)}
              onMouseLeave={event => {
                this.onMouseLeave(event);
              }}
              to="/project"
            >
              Project
            </Link>
            <a
              style={tabs_style}
              onMouseEnter={event => this.onMouseOver(event)}
              onMouseLeave={event => {
                this.onMouseLeave(event);
              }}
              href={pdf}
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </Navigation>
        </Header>
      </Layout>
    );
  }
}

export default CreateHeader;
