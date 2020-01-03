import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class landingpage extends Component {
  render() {
    console.log("Entering landingpage");
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid>
          <Cell col={2}>
            <img
              src="http://img.jiankang.com/temp/2017/02/10/14867143957950.jpg"
              alt="selfie"
              className="selfie"
            />
          </Cell>
          <Cell col={7}>
            <div className="banner-text">
              <h1>About Me</h1>
              <div className="intro-text">
                <p>
                  Ullamco est officia proident consequat pariatur dolore
                  excepteur ea exercitation elit occaecat. Tempor cupidatat anim
                  aliqua cupidatat in in. Minim et consequat nostrud quis
                  reprehenderit.
                </p>

                <p>
                  Labore nulla in excepteur qui mollit nulla commodo Lorem quis
                  exercitation aliquip ad tempor adipisicing. Culpa nostrud
                  cupidatat eu Lorem consequat nostrud. Consectetur Lorem Lorem
                  proident eu adipisicing irure culpa.
                </p>

                <p>
                  Laborum tempor eiusmod do elit culpa. Enim mollit ipsum dolor
                  laborum mollit cillum cupidatat aliquip enim. Et dolor cillum
                  laboris esse mollit nostrud anim dolor enim irure elit culpa
                  id. Proident sit sunt deserunt irure aliqua ullamco cillum
                  fugiat reprehenderit sunt laborum exercitation exercitation
                  proident.
                </p>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default landingpage;
