import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveValue } from "../../store/actions/infoActions";
import Button from "../Button/Button";

const optionsArray = ['Zona BBQ', 'Salón comunal', 'Parque de juegos']

const Options = () => {
  const dispatch = useDispatch();
  const [options, setOptions] = useState([]);
  const { options: optionsState } = useSelector((state) => state.info.fields);

  React.useEffect(() => {
    if (optionsState.length > 0) {
      setOptions(optionsState.split(","));
    }
  }, [optionsState]);

  const handleChange = (event) => {
    if (event.target.checked) {
      if (!options.includes(event.target.value)) {
        setOptions([...options, event.target.value]);
      }
    } else {
      setOptions(options.filter(option => option !== event.target.value));
    }
  };

  return (
    <>
      <div className="form-container">
        {optionsArray.map((option, index) => {
          return (
            <div key={index} className="form-group">
              <input
                type="checkbox"
                name={option}
                id={option}
                value={option}
                onChange={handleChange}
                {...{checked: options.includes(option)}}
              />
              <label htmlFor={option}>{option}</label>
            </div>
          );
        })}
      </div>

      <Button
        onClick={() => {
          dispatch(saveValue("options", options.join(",")));
        }}
      >
        Siguiente
      </Button>
    </>
  );
};

export default Options;
