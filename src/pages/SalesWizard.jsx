import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  Switch,
  Route,
  useRouteMatch,
  Redirect,
  useHistory,
  // useLocation
} from "react-router-dom";
import Resume from "../components/Resume/Resume";
import Wizard from "../components/Wizard/Wizard";
import createComponent from "../utils/createComponents";

const loading = <div className="pt-3 text-center">Loading</div>;

const SalesWizard = () => {
  const match = useRouteMatch();
  const history = useHistory();
  // const location = useLocation();
  const { steps, currentStep } = useSelector((state) => state.app);

  const nextStep = () => {
    console.log("nextStep");
  };

  useEffect(() => {
    history.push(`${currentStep.path}`);
  }, [currentStep, history]);

  return (
    <Wizard>
      <Wizard.Step>
        <Wizard.StepHeader
          title={currentStep.title}
          description={currentStep.description}
        />

        <Wizard.StepContent>
          <React.Suspense fallback={loading}>
            <Switch>
              {steps.map((step, index) => {
                return (
                  <Route
                    key={index}
                    path={`${match.path}/${step.name}`}
                    component={() => createComponent(step, { nextStep })}
                  />
                );
              })}

              {currentStep && (
                <Redirect
                  from={match.path}
                  to={`${match.path}/${currentStep.name}`}
                ></Redirect>
              )}
            </Switch>
          </React.Suspense>
        </Wizard.StepContent>

        <Wizard.StepFooter>
          <div className="dots">
            {steps.map((step, index) => {
              return (
                <span
                  key={index}
                  className={`dots-dot ${
                    step.name === currentStep.name ? "active" : ""
                  } ${step.checked && "completed"}`}
                ></span>
              );
            })}
          </div>
        </Wizard.StepFooter>
      </Wizard.Step>

      <Resume />
    </Wizard>
  );
};

export default SalesWizard;
