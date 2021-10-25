import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadData } from "./store/actions/appActions";
import { ToastContainer, toast } from 'react-toastify';
import { useSelector } from "react-redux";

const Home = React.lazy(() => import("./pages/Home"));
const SalesWizard = React.lazy(() => import("./pages/SalesWizard"));

const loading = <div className="pt-3 text-center">Loading</div>;

const App = () => {
  const dispatch = useDispatch();
  const error = useSelector(state => state.info.error);

  React.useEffect(() => {
    dispatch(loadData());
  }, []);

  React.useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return (
    <>
      <Router>
        <React.Suspense fallback={loading}>
          <Switch>
            <Route path="/sales" render={(props) => <SalesWizard {...props} />} />
            <Route path="/" render={(props) => <Home {...props} />} />
          </Switch>
        </React.Suspense>
      </Router>
      <ToastContainer />
    </>
  );
};
export default App;
