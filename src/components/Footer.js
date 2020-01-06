import React, { Component } from "react";
import { Footer, FooterDropDownSection, FooterLinkList,FooterSection } from "react-mdl";
// import {Linking} from 'react-native';

class CreateFooter extends Component {
  constructor(props) {
    super(props);
    this.launchEmail = this.launchEmail.bind(this);
  }

  launchEmail() {
    window.location.href = `mailto:${"taotianx@cs.ubc.ca"}`;
  }

  render() {
    console.log("Footer rendered");
    return (
      <Footer size="mega">
        <FooterSection type="middle">
          <FooterDropDownSection title="">
            <FooterLinkList>
              <div className="social-links">
                <a
                  href="https://github.com/tianxintao"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="https://github.com/tianxintao"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#/" onClick={this.launchEmail}>
                  <i className="fas fa-envelope-square"></i>
                </a>
              </div>
              <div className="footer-font">
                <div>Lastly Updated: Dec, 2019</div>
                <div>
                  <i className="fas fa-map-marker-alt"> Vancouver, Canada</i>
                </div>
              </div>
            </FooterLinkList>
          </FooterDropDownSection>
        </FooterSection>
      </Footer>
    );
  }
}

export default CreateFooter;
