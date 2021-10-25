import { ADD_NAME, SHOW_ERROR, INIT_FIELDS, ADD_FIELD } from "../types";

const initialState = {
  name: null,
  email: null,
  address: null,
  error: null,
  fields: null,
};

const getPersistedState = (fields) => {
  if (fields) {
    const asArray = Object.entries(fields);
    const filtered = asArray.filter(([key, value]) => value !== "");
    return Object.fromEntries(filtered);
  }
}

export const info = (state = initialState, action) => {
  switch (action.type) {
    case INIT_FIELDS:
      const fieldsWihtValues = getPersistedState(state.fields);
      const fields = action.steps
        .map((step) => step.name)
        .reduce(function (obj, v) {
          obj[v] = "";
          return obj;
        }, {});
      return {
        ...state,
        fields: { ...fields, ...fieldsWihtValues },
        error: null,
      };
    case ADD_FIELD:
      return {
        ...state,
        fields: {
          ...state.fields,
          [action.name]: action.value,
        },
        error: null,
      };
    case ADD_NAME:
      return {
        ...state,
        name: action.name,
        error: null,
      };
    case SHOW_ERROR:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};
