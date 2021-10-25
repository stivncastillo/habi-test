import { INIT_APP, GOT_TO_NEXT_STEP } from "../types";

const initialState = {
  is_loading: false,
  steps: [],
  currentStep: null,
  error: null,
};

export const app = (state = initialState, action) => {
  switch (action.type) {
    case INIT_APP:
      const currentStep = action.steps.sort((a, b) => a.order - b.order)[0];
      return {
        ...state,
        is_loading: true,
        steps: action.steps,
        currentStep,
      };
    case GOT_TO_NEXT_STEP:
      const current = state.steps.find(step => step.name === action.current);
      const nextStep = state.steps.find(step => step.order === current.order + 1);
      return {
        ...state,
        currentStep: nextStep,
      };
    default:
      return state;
  }
};