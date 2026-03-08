import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import FadeInSection from "./FadeInSection";

const isHorizontal = window.innerWidth < 600;

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  if (isHorizontal) {
    return (
      <div role="tabpanel" hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`} {...other}>
        {value === index && (<Box p={3}><Typography>{children}</Typography></Box>)}
      </div>
    );
  } else {
    return (
      <div role="tabpanel" hidden={value !== index}
        id={`vertical-tabpanel`} {...other}>
        {value === index && (<Box p={3}><Typography>{children}</Typography></Box>)}
      </div>
    );
  }
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  if (isHorizontal) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`,
    };
  } else {
    return { id: `vertical-tab-${index}` };
  }
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "transparent",
    display: "flex",
    height: 300,
  },
  tabs: {
    borderRight: `1px solid #30363d`,
  },
}));

const JobList = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const experienceItems = {
    "Nike": {
      jobTitle: "Software Engineering Apprentice",
      duration: "06/24 – 07/25",
      desc: [
        "Implemented a LightGBM recommendation API for North American merchants, reducing the recommendation pipeline timeline by ~3 months.",
        "Utilized NN clustering and decision trees for ground-up feature importance analysis across billions of evergreen North American products.",
        "Built production-grade ML pipelines integrating feature engineering, model training, and API serving for real-time recommendations.",
      ],
    },
    "PrismAI": {
      jobTitle: "Co-Founder & ML Engineer",
      duration: "2024 – Present",
      desc: [
        "Co-founded an agentic business intelligence platform using RAG to ground insights in large-scale datasets — winner of a startup showcase.",
        "Built full-stack BI application using Next.js, FastAPI, Databricks, Redis, and NVIDIA NIM for conversational analytics.",
        "Integrated STFT, Wavelet, and HHT signal processing transforms for time series pattern detection in enterprise retail data.",
      ],
    },
    "NeuraAI Lab": {
      jobTitle: "Research Assistant",
      duration: "2024 – Present",
      desc: [
        "Conducting research on Multi-Resolution Ensemble Transform (ABIT) for time series pattern detection under Professor Nadim Saad.",
        "Benchmarking LSTM vs CMS-augmented LSTM models across Long Range Arena datasets with Optuna hyperparameter optimization.",
        "Collaborating on CMS + Mamba hybrid architectures for long-context sequence modeling.",
      ],
    },
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation={!isHorizontal ? "vertical" : null}
        variant={isHorizontal ? "fullWidth" : "scrollable"}
        value={value}
        onChange={handleChange}
        className={classes.tabs}
      >
        {Object.keys(experienceItems).map((key, i) => (
          <Tab
            key={i}
            label={isHorizontal ? `0${i}.` : key}
            {...a11yProps(i)}
          />
        ))}
      </Tabs>
      {Object.keys(experienceItems).map((key, i) => (
        <TabPanel value={value} index={i} key={i}>
          <span className="joblist-job-title">
            {experienceItems[key]["jobTitle"] + " "}
          </span>
          <span className="joblist-job-company">@ {key}</span>
          <div className="joblist-duration">
            {experienceItems[key]["duration"]}
          </div>
          <ul className="job-description">
            {experienceItems[key]["desc"].map(function (descItem, i) {
              return (
                <FadeInSection delay={`${i + 1}00ms`} key={i}>
                  <li>{descItem}</li>
                </FadeInSection>
              );
            })}
          </ul>
        </TabPanel>
      ))}
    </div>
  );
};

export default JobList;
