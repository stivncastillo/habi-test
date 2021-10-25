import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveValue } from "../../store/actions/infoActions";
import TextInput from "../Form/TextInput/TextInput";
import Button from "../Button/Button";
import useError from "../../hooks/useError";

const Address = () => {
  const dispatch = useDispatch();
  const [address, setAddress] = useState("");
  const { address: addressState } = useSelector((state) => state.info.fields);
  const [setError] = useError();

  React.useEffect(() => {
    if (addressState) {
      setAddress(addressState);
    }
  }, [addressState]);

  const validation = () => {
    if (!address) {
      setError("Ingrese una dirección válida");
      return false;
    }
    return true;
  };

  return (
    <>
      <TextInput
        type="text"
        name="address"
        value={address}
        onChange={(val) => setAddress(val)}
      />

      <Button
        onClick={() => {
          if (validation()) {
            dispatch(saveValue("address", address));
          }
        }}
      >
        Siguiente
      </Button>
    </>
  );
};

export default Address;
