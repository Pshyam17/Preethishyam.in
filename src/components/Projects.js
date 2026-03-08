import React from "react";
import "../styles/Projects.css";
import FadeInSection from "./FadeInSection";
import ExternalLinks from "./ExternalLinks";

class Projects extends React.Component {
  render() {
    const projects = {
      "DistriByte": {
        desc: "End-to-end inventory & sales forecasting. BiLSTM + Attention model served via FastAPI with an interactive React dashboard.",
        techStack: "Python, TensorFlow, FastAPI, Next.js",
        link: "https://github.com/Pshyam17/DistriByte",
        open: "https://distri-byte.vercel.app",
      },
      "CogniScan": {
        desc: "Dementia risk prediction from neuroimaging variables. Random Forest + SHAP explainability on the OASIS MRI dataset.",
        techStack: "Python, scikit-learn, SHAP, FastAPI, Next.js",
        link: "https://github.com/Pshyam17/dementia",
        open: "https://cogni-scan.vercel.app",
      },
      "Ladybug": {
        desc: "CNN-based PE malware detection via byte visualization. Raw EXE/DLL bytes converted to 150x150 grayscale images for classification.",
        techStack: "Python, TensorFlow, FastAPI, Next.js",
        link: "https://github.com/Pshyam17/LadyBug",
        open: "https://lady-bug-delta.vercel.app",
      },
      "PrismAI": {
        desc: "Agentic business intelligence platform using RAG to ground insights in large-scale datasets. Winner of startup showcase.",
        techStack: "Python, Node.js, Next.js, Databricks, NVIDIA NIM",
        link: "https://github.com/Pshyam17/authentication",
        open: "https://github.com/Pshyam17/authentication",
      },
      "STINC": {
        desc: "Android app that allows users to post and vote on neighbourhood issues.",
        techStack: "Java, Android Studio",
        link: "https://github.com/Pshyam17/stinc",
        open: "https://github.com/Pshyam17/stinc",
      },
    };

    return (
      <div id="projects">
        <div className="section-header">
          <span className="section-title">projects</span>
        </div>
        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`} key={key}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="card-links">
                      <ExternalLinks
                        githubLink={projects[key]["link"]}
                        openLink={projects[key]["open"]}
                      />
                    </div>
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
