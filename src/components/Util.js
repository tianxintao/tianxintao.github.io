import pdf_ICORR_19 from "../files/ICORR_19.pdf";
import pdf_554_project from "../files/554_project.pdf";

const addItem = (
  project_name,
  author_list,
  venue,
  pdf_file,
  img_source,
  render_code,
  projectlist
) => {
  let projectitem = {};
  projectitem.project_name = project_name;
  projectitem.author_list = author_list;
  projectitem.venue = venue;
  projectitem.pdf_file = pdf_file;
  projectitem.img_source = img_source;
  projectitem.render_code = render_code;
  projectlist.push(projectitem)
};

export default class Utils {
  static getPublicationInfo() {
    let publication_list = [];
    
    addItem(
      "Towards the Development of a Learning-Based Intention Classification Framework for Pushrim-Activated Power-Assisted Wheelchairs",
      "Mahsa Khalili, Tianxin Tao, Ruolan Ye, Shuyong Xie, Huancheng Yang, H.F. Machiel Van der Loos, Member, IEEE, Jaimie F. Borisoff",
      "IEEE/RAS-EMBS International Conference on Rehabilitation Robotics (ICORR 2019)",
      pdf_ICORR_19,
      require("../figs/ICORR_19.png"),
      false,
      publication_list
    );
    return publication_list;
  }

  static getProjectInfo() {
    let project_list = [];
    
    addItem(
      "Filling Level Estimation",
      null,
      "CPSC 554X: Machine Learning with Signals",
      pdf_554_project,
      require("../figs/fill_level_estimation.png"),
      false,
      project_list
    );
    return project_list;
  }
}



