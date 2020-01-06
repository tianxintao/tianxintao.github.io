import pdf_ICORR_19 from "../files/ICORR_19.pdf";

export default function getProjectInfo() {
  let projectlist = [];
  const addProjectInfo = (
    project_name,
    author_list,
    venue,
    pdf_file,
    img_path,
    render_code
  ) => {
    let projectitem = {};
    projectitem.project_name = project_name;
    projectitem.author_list = author_list;
    projectitem.venue = venue;
    projectitem.pdf_file = pdf_file;
    projectitem.img_path = img_path;
    projectitem.render_code = render_code;
    projectlist.push(projectitem)
  };
  addProjectInfo(
    "Towards the Development of a Learning-Based Intention Classification Framework for Pushrim-Activated Power-Assisted Wheelchairs",
    "Mahsa Khalili, Tianxin Tao, Ruolan Ye, Shuyong Xie, Huancheng Yang, H.F. Machiel Van der Loos, Member, IEEE, Jaimie F. Borisoff",
    "IEEE/RAS-EMBS International Conference on Rehabilitation Robotics (ICORR 2019)",
    pdf_ICORR_19,
    "../figs/ICORR_19.png",
    false
  );
  return projectlist;
}
