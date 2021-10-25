import { SHOW_ERROR, GOT_TO_NEXT_STEP, ADD_FIELD } from "../types";

export const saveValue = (name, value) => {
  return (dispatch) => {
    if (value === "") {
      dispatch({
        type: SHOW_ERROR,
        error: `Por favor ingresa un valor en el campo ${name}`,
      });
      return;
    }

    dispatch({
      type: ADD_FIELD,
      name,
      value
    });

    dispatch({
      type: GOT_TO_NEXT_STEP,
      current: name,
    });
  };
};