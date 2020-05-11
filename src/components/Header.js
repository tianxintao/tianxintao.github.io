import React, { Component } from "react";
import { Header, Navigation } from "react-mdl";
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
    return (
        <Header
        className="header-color"
        title={
          <Link
            className="home-tab"
            to="/"
            onMouseEnter={(event) => this.onMouseOver(event)}
            onMouseLeave={(event) => {
              this.onMouseLeave(event);
            }}
          >
            Tianxin's Homepage
          </Link>
        }
        scroll
      >
          <Navigation style={{position:"relative",left:"0px"}}>
            <Link
              className = "header-link"
              onMouseEnter={(event) => this.onMouseOver(event)}
              onMouseLeave={(event) => {
                this.onMouseLeave(event);
              }}
              to="/project"
            >
              <p>
              Publications &#38; Projects
              </p>  
            </Link>
            <a
              className = "header-link"
              onMouseEnter={(event) => this.onMouseOver(event)}
              onMouseLeave={(event) => {
                this.onMouseLeave(event);
              }}
              href={pdf}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>
                Resume
              </p>
            </a>
          </Navigation>
      </Header>      
    );
  }
}

export default CreateHeader;
