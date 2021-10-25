import { toast } from "react-toastify";
import * as React from "react";

function useError() {
  const [error, setError] = React.useState(null);
  React.useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return [setError];
}

export default useError;
