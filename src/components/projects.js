import React from 'react';
import '../App.css';
// import SOON from '../assets/coming soon.jpg';
import ProjectData from './projectData';
// import Data from './projectData';

function Work() {

  const cards = ProjectData.map((item) => {
    // const stacks = item.techUsed.map((stack) => {
    //     return <p>{stack}</p>;
    // })
    return (
      <div className="projects__container" key={item.id}>
        <div className="img-div">
          <img
            src={require("../assets/" + item.coverImg + ".jpg")}
            alt="Project icon"
          />
        </div>
        <div className="proj__desc">
          <h2>{item.projectTitle}</h2>
          <div className="project__desc-used">
            <p className="used-tech">{item.techUsed}</p>
          </div>
          <div className="links">
            <a href={item.liveLink} className="site-link" target="blank">
              LIVE SITE
            </a>
            <a href={item.repoLink} className="repo-link" target="blank">
              REPO LINK
            </a>
          </div>
        </div>
      </div>
    );
  })


  return (
    <div className="projects">
      {cards}
    </div>
  );
}

export default Work;