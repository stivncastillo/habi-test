import React from "react";
import PropTypes from 'prop-types'

export const Wizard = ({ children }) => (
  <div className="wizard">{children}</div>
);

export const WizardStep = ({ children }) => (
  <div className="wizard-step">{children}</div>
);
export const WizardStepHeader = ({ title, description }) => (
  <div className="wizard-step-header">
    <h1>{title}</h1>
    <p>{description}</p>
  </div>
);

WizardStepHeader.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export const WizardStepContent = ({ children }) => (
  <div className="wizard-step-content">{children}</div>
);

export const WizardStepFooter = ({ children }) => (
  <div className="wizard-step-footer">{children}</div>
);

Wizard.Step = WizardStep;
Wizard.StepHeader = WizardStepHeader;
Wizard.StepContent = WizardStepContent;
Wizard.StepFooter = WizardStepContent;
export default Wizard;