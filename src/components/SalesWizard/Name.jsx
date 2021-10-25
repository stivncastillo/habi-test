import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveValue } from "../../store/actions/infoActions";
import TextInput from "../Form/TextInput/TextInput";
import Button from "../Button/Button";
import useError from "../../hooks/useError";

const Name = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const { name: nameState } = useSelector((state) => state.info.fields);
  const [setError] = useError();

  React.useEffect(() => {
    if (nameState) {
      setName(nameState);
    }
  }, [nameState]);

  const validation = () => {
    if (name.length < 3) {
      setError("El nombre debe tener al menos 3 carácteres");
      return false;
    }
    return true;
  };

  return (
    <>
      <TextInput
        type="text"
        name="name"
        value={name}
        onChange={(val) => setName(val)}
      />

      <Button
        onClick={() => {
          if (validation()) {
            dispatch(saveValue("name", name));
          }
        }}
      >
        Siguiente
      </Button>
    </>
  );
};

export default Name;
