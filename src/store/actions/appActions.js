import { INIT_APP, INIT_FIELDS } from "../types";
import data from "../../data/data.json";

const formatData = (steps) => {
  return steps.map((item) => ({
    ...item,
    checked: false,
  }));
}

export const loadData = () => {
  return (dispatch) => {
    const steps = formatData(data);
    dispatch({
      type: INIT_APP,
      steps,
    });
    dispatch({
      type: INIT_FIELDS,
      steps,
    });
  };
};