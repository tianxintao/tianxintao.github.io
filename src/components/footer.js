import React, { Component } from "react";
import { Footer, FooterSection, FooterLinkList } from "react-mdl";

const CreateFooter= () => (
  <Footer size="mini">
    <FooterSection type="left" logo="Title">
      <FooterLinkList>
        <a href="#">Help</a>
        <a href="#">Privacy & Terms</a>
      </FooterLinkList>
    </FooterSection>
  </Footer>
);

// class footer extends Component {
//   render() {
//     console.log("Footer rendered")
//     return (
//       <Footer size="mini">
//         <FooterSection type="left" logo="Title">
//           <FooterLinkList>
//             <a href="http://www.google.com">Help</a>
//             <a href="http://www.google.com">Privacy & Terms</a>
//           </FooterLinkList>
//         </FooterSection>
//       </Footer>
//     );
//   }
// }

export default CreateFooter;
