import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import FadeInSection from "./FadeInSection";
import ExternalLinks from "./ExternalLinks";

const PROJECT_ASCII = {
  DistriByte: `
┌─────────────────┐
│  DISTRI  BYTE   │
│  ██ ██ ██ ██   │
│  inventory AI   │
└─────────────────┘`,
  CogniScan: `
┌─────────────────┐
│   COGNI SCAN    │
│  ▓▓ brain ▓▓   │
│  RF + SHAP AI   │
└─────────────────┘`,
  Ladybug: `
┌─────────────────┐
│  🐞 LADYBUG     │
│  01001101 4C    │
│  CNN malware    │
└─────────────────┘`,
  PrismAI: `
┌─────────────────┐
│    PRISM AI     │
│  ◈ BI + RAG ◈  │
│  agentic intel  │
└─────────────────┘`,
  STINC: `
┌─────────────────┐
│     STINC       │
│  [android app]  │
│  neighborhood   │
└─────────────────┘`,
};

class Projects extends React.Component {
  render() {
    const projects = {
      "DistriByte": {
        title: "DistriByte",
        desc: "End-to-end inventory & sales forecasting platform. BiLSTM + Attention model served via FastAPI with an interactive React dashboard.",
        techStack: "Python, TensorFlow, FastAPI, Next.js, Recharts",
        link: "https://github.com/Pshyam17/DistriByte",
        open: "https://distri-byte.vercel.app",
      },
      "CogniScan": {
        title: "CogniScan",
        desc: "Dementia risk prediction from neuroimaging variables. Random Forest + SHAP explainability trained on the OASIS longitudinal MRI dataset.",
        techStack: "Python, scikit-learn, SHAP, FastAPI, Next.js",
        link: "https://github.com/Pshyam17/dementia",
        open: "https://cogniscan.vercel.app",
      },
      "Ladybug": {
        title: "Ladybug",
        desc: "CNN-based PE malware detection via byte visualization. Converts raw EXE/DLL bytes into 150×150 grayscale images for classification.",
        techStack: "Python, TensorFlow, FastAPI, Next.js",
        link: "https://github.com/Pshyam17/LadyBug",
        open: "https://ladybug-psi.vercel.app",
      },
      "PrismAI": {
        title: "PrismAI",
        desc: "Agentic business intelligence platform using RAG to ground insights in large-scale datasets. Winner of startup showcase.",
        techStack: "Python, Node.js, Next.js, Databricks, NVIDIA NIM",
        link: "https://github.com/Pshyam17/authentication",
        open: "https://github.com/Pshyam17/authentication",
      },
      "STINC": {
        title: "STINC",
        desc: "Android app that allows users to post and vote on neighbourhood issues. Built with Java and Android Studio.",
        techStack: "Java, Android Studio",
        link: "https://github.com/Pshyam17/stinc/",
        open: "https://github.com/Pshyam17/stinc",
      },
    };

    return (
      <div id="projects">
        <div className="section-header">
          <span className="section-title">projects</span>
        </div>

        {/* Terminal ls output */}
        <FadeInSection>
          <div style={{
            color: "var(--slate)", fontSize: 12, marginBottom: 24,
            fontFamily: "var(--font)", lineHeight: 1.8,
            borderLeft: "2px solid var(--border)", paddingLeft: 16,
          }}>
            <span style={{ color: "var(--green)" }}>preethi@portfolio</span>
            <span style={{ color: "var(--white)" }}>:</span>
            <span style={{ color: "var(--prompt)" }}>~/projects</span>
            <span style={{ color: "var(--white)" }}>$ ls -la</span>
            <br />
            <span style={{ color: "var(--slate)" }}>total {Object.keys(projects).length} projects</span>
          </div>
        </FadeInSection>

        <ul className="projects-grid">
          {Object.keys(projects).map((key, i) => (
            <FadeInSection delay={`${i + 1}00ms`} key={key}>
              <li className="projects-card">
                <div className="card-header">
                  <pre className="project-ascii">
                    {PROJECT_ASCII[key] || `┌────────────┐\n│  ${key.padEnd(10)}│\n└────────────┘`}
                  </pre>
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
    );
  }
}

export default Projects;
