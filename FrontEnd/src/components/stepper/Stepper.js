import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { StepLabel } from "@mui/material";
import PropTypes from "prop-types";
import Signup from "../signup/Signup";

const steps = [
  "Personal Details",
  "Skill Details",
  "Other Details",
  "Assignment"
];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const StepperComp = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <div className="flex justify-center items-center w-full text-base p-2.5 pt-6">
      <div className="w-full">
        <Stepper className="py-4" nonLinear activeStep={activeStep}>
          {steps.map((label, index) => (
            <Step
              sx={{ flexDirection: "column" }}
              key={label}
              completed={completed[index]}
            >
              <StepButton color="inherit" onClick={handleStep(index)}>
                <StepLabel sx={{ flexDirection: "column" }}> {label}</StepLabel>
              </StepButton>
            </Step>
          ))}
        </Stepper>
        <TabPanel value={activeStep} index={0}>
          <Signup handleComplete={handleComplete} completed={completed} activeStep={activeStep}/>
        </TabPanel>
        <TabPanel value={activeStep} index={1}>
          <Signup handleComplete={handleComplete} completed={completed} activeStep={activeStep}/>
        </TabPanel>
        <TabPanel value={activeStep} index={2}>
          <Signup handleComplete={handleComplete} completed={completed} activeStep={activeStep}/>
        </TabPanel>
        <TabPanel value={activeStep} index={3}>
          <Signup handleComplete={handleComplete} completed={completed} activeStep={activeStep}/>
        </TabPanel>
        <div>
          {allStepsCompleted() && (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                All steps completed - you&apos;re finished
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Box sx={{ flex: "1 1 auto" }} />
                <Button onClick={handleReset}>Reset</Button>
              </Box>
            </React.Fragment>
            
        //   ) : (
        //     <React.Fragment>
        //       <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
        //         <Box sx={{ flex: "1 1 auto" }} />
        //         {activeStep !== steps.length &&
        //           (completed[activeStep] ? (
        //             <p>Already completed</p>
        //           ) : (
        //             <Button onClick={handleComplete}>
        //               {completedSteps() === totalSteps() - 1
        //                 ? "Finish"
        //                 : "Next"}
        //             </Button>
        //           ))}
        //       </Box>
        //     </React.Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

export default StepperComp;
