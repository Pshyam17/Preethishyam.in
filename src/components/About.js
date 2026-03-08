import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
  constructor() {
    super();
    this.state = { expanded: true, activeKey: "1" };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({ activeKey: eventKey });
  }
  render() {
    const one = (
      <p>
        I'm a <b> MS in Artificial Intelligence student </b> at Northeastern University,
        currently researching context memory architectures. I co-founded{" "}
        <b>PrismAI</b>, a business intelligence platform that won a startup showcase,
        and worked as a Software Engineering Apprentice at <b>Nike</b> building a
        product recommendation api using LightGBM and other feature analysis.
      </p>
    );
    const two = (
      <p>
        Outside of work, I love playing the fiddle, enjoy skating and a good game of chess, and love building things that
        sit at the intersection of research and real-world impact.
      </p>
    );

    const tech_stack = [
      "Python",
      "TensorFlow / Keras",
      "scikit-learn + SHAP",
      "FastAPI",
      "React / Next.js",
      "Java",
      "SQL / Databricks",
      "Docker",
    ];

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header">
            <span className="section-title">about me</span>
          </div>

          {/* Terminal whoami block */}
          <div style={{
            color: "var(--slate)", fontSize: 12, marginBottom: 28,
            fontFamily: "var(--font)", lineHeight: 1.8,
            borderLeft: "2px solid var(--border)", paddingLeft: 16,
          }}>
            <span style={{ color: "var(--green)" }}>preethi@portfolio</span>
            <span style={{ color: "var(--white)" }}>:~$ whoami</span>
            <br />
            <span style={{ color: "var(--cyan)" }}>{">> "}</span>
            <span>MS AI · Northeastern · NeuraAI Lab · Builder</span>
          </div>

          <div className="about-content">
            <div className="about-description">
              {[one]}
              {"// technologies I've been working with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`} key={i}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              {[two]}
            </div>
            <div className="about-image">
              <img alt="Preethi Shyam" src={"/assets/IMG_2027.HEIC"} />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
