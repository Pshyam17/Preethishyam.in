import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
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
    const one = (
      <p>
        I'm currently a <b> MS in AI student at </b> Northeastern University. 
       
      </p>
    );
    const two = (
      <p>
        Outside of work, I'm interested in blogging, playing tunes on my violin and Muay Thai.
      </p>
    );

    const tech_stack = [
      "Java",
      "Python",
      "R",
      "C++",
      "ReactJS",
      "HTML/CSS"
    ];

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {"Here are some technologies I have been working with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
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
