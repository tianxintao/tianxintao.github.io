import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import "../App.css";

class landingpage extends Component {
  render() {
    console.log("Entering landingpage");
    return (
      <div style={{ width: "80%", margin: "auto" }}>
        <Grid>
          <Cell col={2}>
            <img
              src="http://img.jiankang.com/temp/2017/02/10/14867143957950.jpg"
              alt="selfie"
              className="selfie"
            />
          </Cell>
          <Cell col={6} className="grid-1">
            <div className="banner-text">
              <h1>About Me</h1>
              <div className="intro-text">
                <p>
                  I am a first-year Master student in{" "}
                  <a className="link-style" href="https://www.cs.ubc.ca/">
                    Computer Science
                  </a>{" "}
                  at University of British Columbia. I am mostly interested
                  control and deep reinforcement learning, which is
                  an interdisciplinary between computer science and engineering.
                </p>

                <p>
                  Prior to pursuing a Master degree, I obtained my Bachelor
                  degree from UBC in Mechanical Enginnering,{" "}
                  <a
                    className="link-style"
                    href="https://en.wikipedia.org/wiki/Mechatronics"
                  >
                    Mechatroinics
                  </a>{" "}
                  option with a minor in computer science.
                </p>

                <p>
                  Besides studying, I also enjoy various outdoor activities such
                  as skiing and mountain biking, which helps me refresh my minds
                  from endless coding.
                </p>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
      // <div style={{ width: "80%", margin: "auto" }}>
      //   <Grid className="demo-grid-ruler">
      //     <Cell col={1}>1</Cell>
      //     <Cell col={1}>1</Cell>
      //     <Cell col={1}>1</Cell>
      //     <Cell col={1}>1</Cell>
      //     <Cell col={1}>1</Cell>
      //     <Cell col={1}>1</Cell>
      //     <Cell col={1}>1</Cell>
      //     <Cell col={1}>1</Cell>
      //     <Cell col={1}>1</Cell>
      //     <Cell col={1}>1</Cell>
      //     <Cell col={1}>1</Cell>
      //     <Cell col={1}>1</Cell>
      //   </Grid>
      //   <Grid className="demo-grid-1">
      //     <Cell col={4}>4</Cell>
      //     <Cell col={4}>4</Cell>
      //     <Cell col={4}>4</Cell>
      //   </Grid>
      //   <Grid className="demo-grid-2">
      //     <Cell col={6}>6</Cell>
      //     <Cell col={4}>4</Cell>
      //     <Cell col={2}>2</Cell>
      //   </Grid>
      //   <Grid className="demo-grid-3">
      //     <Cell col={6} tablet={8}>
      //       6 (8 tablet)
      //     </Cell>
      //     <Cell col={4} tablet={6}>
      //       4 (6 tablet)
      //     </Cell>
      //     <Cell col={2} phone={4}>
      //       2 (4 phone)
      //     </Cell>
      //   </Grid>
      // </div>
    );
  }
}

export default landingpage;
