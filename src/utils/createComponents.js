import React from "react";

const Name = React.lazy(() => import("../components/SalesWizard/Name"));
const Email = React.lazy(() => import("../components/SalesWizard/Email"));
const Address = React.lazy(() => import("../components/SalesWizard/Address"));
const Floors = React.lazy(() => import("../components/SalesWizard/Floors"));
const Options = React.lazy(() => import("../components/SalesWizard/Options"));

const Components = {
  Name,
  Email,
  Address,
  Floors,
  Options,
};

const createComponent = (step, { nextStep }) => {
  if (typeof Components[step.component] !== "undefined") {
    return React.createElement(Components[step.component], {
      key: `${step.name}__${step.order}`,
      step,
      nextStep,
    });
  }
  return React.createElement(
    () => <div>The component {step.component} has not been created yet.</div>,
    { key: `${step.name}__${step.order}` }
  );
};

export default createComponent;
