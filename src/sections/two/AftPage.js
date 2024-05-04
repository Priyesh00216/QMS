import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import TimeLineb from './TimeLine';

const steps = ['Requirement Analysis', 'Planning and Designing', 'Developing', 'Testing', 'Deployment', 'Feedback and Maintenance'];

export default function AftPage() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const [showAlert, setShowAlert] = React.useState(false);

  const totalSteps = () => steps.length;
  const completedSteps = () => Object.keys(completed).length;
  const isLastStep = () => activeStep === totalSteps() - 1;
  const allStepsCompleted = () => completedSteps() === totalSteps();

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => setActiveStep(prevActiveStep => prevActiveStep - 1);

  const handleStep = step => () => setActiveStep(step);

  const handleComplete = () => {
    const newCompleted = { ...completed };
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  const handleProcessComplete = step => {
    const newCompleted = { ...completed };
    newCompleted[step] = true;
    setCompleted(newCompleted);
  };

  const handleProcessClose = step => {
    const newCompleted = { ...completed };
    delete newCompleted[step];
    setCompleted(newCompleted);
  };

  const handleDownload = () => setShowAlert(true);
  const handleCloseAlert = () => setShowAlert(false);

  return (
    <>
      {showAlert && (
        <Alert
          severity="success"
          sx={{ mt: 2, mb: 1 }}
          onClose={() => setShowAlert(false)}
        >
          Your file is downloaded.
        </Alert>
      )}
      <Box sx={{ width: '100%' }}>
        <Stepper nonLinear activeStep={activeStep}>
          {steps.map((label, index) => (
            <Step key={label} completed={completed[index]}>
              <StepButton color="inherit" onClick={handleStep(index)}>
                {label}
              </StepButton>
            </Step>
          ))}
        </Stepper>
        <div>
          {allStepsCompleted() ? (
            <>
              <Typography sx={{ mt: 2, mb: 1 }}>
                All steps completed - you&apos;re finished
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Box sx={{ flex: '1 1 auto' }} />
                <Button onClick={handleReset}>Reset</Button>
                <Button onClick={handleDownload} sx={{ ml: 1 }}>Download</Button>
              </Box>
            </>
          ) : (
            <>
              <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
                Step {activeStep + 1}
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Back
                </Button>
                <Box sx={{ flex: '1 1 auto' }} />
                <Button onClick={handleNext} sx={{ mr: 1 }}>
                  Next
                </Button>
                {activeStep !== steps.length &&
                  (completed[activeStep] ? (
                    <Typography variant="caption" sx={{ display: 'inline-block' }}>
                      Step {activeStep + 1} already completed
                    </Typography>
                  ) : (
                    <Button onClick={handleComplete}>
                      {completedSteps() === totalSteps() - 1 ? 'Finish' : 'Complete Step'}
                    </Button>
                  ))}
              </Box>
            </>
          )}
        </div>
        <div className='w-auto h-auto'>
          <TimeLineb
            handleProcessComplete={handleProcessComplete}
            handleProcessClose={handleProcessClose}
          />
        </div>
      </Box>
    </>
  );
}
