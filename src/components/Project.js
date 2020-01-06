import React, { Component } from "react";
import {
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  Grid,
  Cell
} from "react-mdl";
import getProjectInfo from "./Util.js";
import pdf from "../files/Resume_TianxinTao.pdf";
import "../App.css";

class project extends Component {
  constructor(props) {
    super(props);
    this.renderProjectCard = this.renderProjectCard.bind(this);
  }

  renderProjectCard() {
    let project_list = getProjectInfo();
    let project_cards = project_list.map((project, key) => (
      <ProjectCard key={key}
        project_name={project.project_name}
        author_list={project.author_list}
        venue={project.venue}
        pdf_file={project.pdf_file}
        img_path={project.img_path}
        render_code={project.render_code}
      />
    ));
    return project_cards;
  }

  render() {
    this.renderProjectCard();
    return (
      <div>
        <div className="banner-text">
          <h1 style={{marginLeft:"85px"}}>Project Page</h1>
        </div>
        <div>{this.renderProjectCard()}</div>
      </div>
    );
  }
}

class ProjectCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project_name: this.props.project_name,
      author_list: this.props.author_list,
      venue: this.props.venue,
      render_code: this.props.render_code,
      pdf_file: this.props.pdf_file,
      img_path: this.props.img_path
    };
  }
  render() {
    console.log(this.state.img_path)
    return (
      <div
        style={{
          width: "70%",
          height: "15%",
          margin: "auto",
          marginBottom: "2em"
        }}
      >
        <Grid style={{ borderStyle: "dashed", margin: "10px" }}>
          <Cell col={3}>
            <img
              style={{ width: "100%" }}
              alt="project_img"
              src={require("../figs/ICORR_19.png")}
            ></img>
          </Cell>
          <Cell col={9}>
            <Card style={{ width: "100%" }} shadow={1}>
              <CardTitle
                expand
                style={{
                  color: "black"
                }}
              >
                {this.state.project_name}
              </CardTitle>
              <CardText>{this.state.author_list}</CardText>
              <CardText>{this.state.venue}</CardText>
              <CardActions border>
                <Button href={this.state.pdf_file} colored>
                  PDF
                </Button>
                {this.state.render_code ? (
                  <Button href={pdf} colored>
                    code
                  </Button>
                ) : (
                  ""
                )}
              </CardActions>
            </Card>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default project;
