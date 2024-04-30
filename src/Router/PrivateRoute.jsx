import { useContext } from "react";
import { AuthContext } from "../firebase/FirebaseProvider";
import { RotatingLines } from "react-loader-spinner";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <RotatingLines
          visible={true}
          height="96"
          width="96"
          color="#001220"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};
PrivateRoute.propTypes={
  children:PropTypes.func
}
export default PrivateRoute;
