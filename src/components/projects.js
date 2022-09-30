import React from 'react';
import '../App.css';
import ProjectData from './projectData';
import { motion } from 'framer-motion'

function Work() {

  const cards = ProjectData.map((item) => {
    return (
      <motion.div
        className="projects__container"
        key={item.id}
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
       exit={{ x: "100%", transition: { duration: 0.2, delay: 0.2 } }}
       >
        <div className="img-div">
          <img src={item.src} alt="Project pic" />
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
      </motion.div>
    );
  })


  return (
    <div className="projects">
      {cards}
    </div>
  );
}

export default Work;