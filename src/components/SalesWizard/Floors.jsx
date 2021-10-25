import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveValue } from "../../store/actions/infoActions";
import Button from "../Button/Button";
import useError from "../../hooks/useError";
import Select from "../Form/Select/Select";

const floorsNumber = Array.from(Array(50).keys()).map((f) => {
  return { value: f + 1, label: f + 1 };
});

const Floors = () => {
  const dispatch = useDispatch();
  const [floors, setFloors] = useState("");
  const { floors: floorsState } = useSelector((state) => state.info.fields);
  const [setError] = useError();

  React.useEffect(() => {
    if (floorsState) {
      setFloors(floorsState);
    }
  }, [floorsState]);

  const validation = () => {
    if (!floors) {
      setError("Por favor elija el número de pisos");
      return false;
    }
    return true;
  };

  return (
    <>
      <Select options={floorsNumber} name="floors" value={floors} onChange={(val) => setFloors(val)} />

      <Button
        onClick={() => {
          if (validation()) {
            dispatch(saveValue("floors", floors));
          }
        }}
      >
        Siguiente
      </Button>
    </>
  );
};

export default Floors;
