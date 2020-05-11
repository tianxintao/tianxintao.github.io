import React, { Component } from "react";
import {
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  Grid,
  Cell,
} from "react-mdl";
import Utils from "./Util.js";
import pdf from "../files/Resume_TianxinTao.pdf";
import "../App.css";

class project extends Component {
  constructor(props) {
    super(props);
    this.renderPublicationCard = this.renderPublicationCard.bind(this);
  }

  renderPublicationCard() {
    let Publication_list = Utils.getPublicationInfo();
    let Publication_cards = Publication_list.map((Publication, key) => (
      <ProjectCard
        key={key}
        project_name={Publication.project_name}
        author_list={Publication.author_list}
        venue={Publication.venue}
        pdf_file={Publication.pdf_file}
        img_source={Publication.img_source}
        render_code={Publication.render_code}
      />
    ));
    return Publication_cards;
  }

  renderProjectCard() {
    let Publication_list = Utils.getProjectInfo();
    let Publication_cards = Publication_list.map((Publication, key) => (
      <ProjectCard
        key={key}
        project_name={Publication.project_name}
        author_list={Publication.author_list}
        venue={Publication.venue}
        pdf_file={Publication.pdf_file}
        img_source={Publication.img_source}
        render_code={Publication.render_code}
      />
    ));
    return Publication_cards;
  }

  render() {
    return (
      <div style={{ width: "80%", margin: "auto" }}>
        <div className="banner-text">
          <h1>Publication</h1>
        </div>
        <div>{this.renderPublicationCard()}</div>
        <div className="banner-text">
          <h1>Project</h1>
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
      img_source: this.props.img_source,
    };
  }
  render() {
    return (
      <div
        style={{
          width: "100%",
          height: "5%",
          margin: "auto",
          marginBottom: "2em",
        }}
      >
        <Grid style={{ borderStyle: "dashed", margin: "10px" }}>
          <Cell col={3}>
            <img
              style={{ width: "100%" }}
              alt="project_img"
              src={this.state.img_source}
            ></img>
          </Cell>
          <Cell col={9}>
            <Card style={{ width: "100%" }} shadow={1}>
              <CardTitle expand>
                <div className="card-title">
                  {this.state.project_name}
                </div>
              </CardTitle>
              {this.state.author_list != null &&
                <CardText><div className="card-text">{this.state.author_list}</div></CardText>
                }
              <CardText><div className="card-text">{this.state.venue}</div></CardText>
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
