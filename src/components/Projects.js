import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import FadeInSection from "./FadeInSection";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-bootstrap/Carousel";
import ExternalLinks from "./ExternalLinks";

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  
  render() {
    const spotlightProjects = {

      "Authentication module": {
        title: "PrismAI",
        desc:
          " Building An agentic business intelligence using RAG to ground insights in large-scale datasets. ",
        techStack: "PYTHON, NODE, NEXTJS",
        link: "https://github.com/Pshyam17/authentication",
        open: "https://github.com/Pshyam17/authentication",
        //image: "/assets/nomansland.png"
      },
      "Foggy": {
        title: "Foggy",
        desc:
          "A dementia prediction model using Random Forest.",
        techStack: "R programming",
        link: "https://github.com/Pshyam17/dementia",
        open: "https://github.com/Pshyam17/dementia",
        //image: "public/assets/AI.png"
      },
      "Ladybug": {
        title: "Ladybug",
        desc:
          "A malware detection CNN using tensorflow and keras.",
        techStack: "PYTHON",
        link: "https://github.com/Pshyam17/Model",
        open: "https://github.com/Pshyam17/Model",
        //image: "public/assets/MALWARE.png"
      },
      "STINC": {
        title: "stinc",
        desc:
          "An android java application that allows users to post and vote on neighborhood issues.",
        techStack: "Java, ANDROID STUDIO",
        link: "https://github.com/Pshyam17/stinc/",
        open: "https://github.com/Pshyam17/stinc",
        //image: "/assets/conversation_3680054.png"
      }
      
    };
    
    const projects = {
       "Authentication module": {
        title: "Authentication module",
        desc:
          " Developed the authentication module for a native android application ",
        techStack: "JAVA, FLUTTER",
        link: "https://github.com/Pshyam17/authentication",
        open: "https://github.com/Pshyam17/authentication",
        //image: "/assets/nomansland.png"
      },
      "Foggy": {
        title: "Foggy",
        desc:
          "A dementia prediction model using Random Forest.",
        techStack: "R programming",
        link: "https://github.com/Pshyam17/dementia",
        open: "https://github.com/Pshyam17/dementia",
        //image: "/assets/truth.png"
      },
      "Ladybug": {
        title: "Ladybug",
        desc:
          "A malware detection CNN using tensorflow and keras.",
        techStack: "PYTHON",
        link: "https://github.com/Pshyam17/Model",
        open: "https://github.com/Pshyam17/Model",
        //image: "/assets/truth.png"
      },
      "STINC": {
        title: "stinc",
        desc:
          "An android java application that allows users to post and vote on neighborhood issues.",
        techStack: "Java, ANDROID STUDIO",
        link: "https://github.com/Pshyam17/stinc/",
        open: "https://github.com/Pshyam17/stinc/",
        //image: "/assets/talltales.png"
      },
      Portfolio: {
        title: "portfolio.js",
        desc:
          "A small JS library that helps with clear and succinct data presentation.",
        techStack: "NODE.JS (EXPRESS.JS)",
        link: "https://github.com/Pshyam17/website",
        open: "https://github.com/Pshyam17/website",
        //image: "/assets/portfolio.png"
      }
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title"> projects</span>
        </div>
    {/* <Carousel>
          {Object.keys(spotlightProjects).map((key, i) => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={spotlightProjects[key]["image"]}
                alt={key}
              />
              <div className="caption-bg">
                <Carousel.Caption>
                  <h3>{spotlightProjects[key]["title"]}</h3>
                  <p>
                    {spotlightProjects[key]["desc"]}
                    <p className="techStack">
                      {spotlightProjects[key]["techStack"]}
                    </p>
                  </p>
                  <ExternalLinks
                    githubLink={spotlightProjects[key]["link"]}
                    openLink={spotlightProjects[key]["open"]}
                  ></ExternalLinks>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        */}
        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon
                        style={{ fontSize: 35 }}
                      ></FolderOpenRoundedIcon>
                    </div>
                    <ExternalLinks
                      githubLink={projects[key]["link"]}
                      openLink={projects[key]["open"]}
                    ></ExternalLinks>
                  </div>

                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;
