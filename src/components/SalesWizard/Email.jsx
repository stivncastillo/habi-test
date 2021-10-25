import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveValue } from "../../store/actions/infoActions";
import TextInput from "../Form/TextInput/TextInput";
import Button from "../Button/Button";
import useError from "../../hooks/useError";
import { validEmail } from "../../utils/utilities";

const Email = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const { email: emailState } = useSelector((state) => state.info.fields);
  const [setError] = useError();

  React.useEffect(() => {
    if (emailState) {
      setEmail(emailState);
    }
  }, [emailState]);

  const validation = () => {
    if (!validEmail(email)) {
      setError("Ingrese un email válido");
      return false;
    }
    return true;
  };

  return (
    <>
      <TextInput
        type="text"
        name="email"
        value={email}
        onChange={(val) => setEmail(val)}
      />

      <Button
        onClick={() => {
          if (validation()) {
            dispatch(saveValue("email", email));
          }
        }}
      >
        Siguiente
      </Button>
    </>
  );
};

export default Email;
