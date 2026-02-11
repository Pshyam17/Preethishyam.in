import React from "react";
import JobList from "./JobList";
import "../styles/Experience.css";
import FadeInSection from "./FadeInSection";

class Experience extends React.Component {
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
    return (
      <div id="experience">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ experience</span>
          </div>
          <JobList>

Software Engineering Apprentice | Nike 					                                                         06/24 — 07/25 | 

Implemented a LightGBM approach for the development of a product recommendation API for North American merchants, reducing the timeline of recommendation by ~3 months.
Utilized NN clustering and decision trees for ground up feature importance analysis and selection for billions of evergreen North American products and LightGBM for forecasting.

      </JobList>
        </FadeInSection>
      </div>
    );
  }
}

export default Experience;
