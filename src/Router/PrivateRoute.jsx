import {  useContext } from "react";
import { AuthContext } from "../firebase/FirebaseProvider";
import { RotatingLines } from "react-loader-spinner";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
  const { user, loading } = useContext(AuthContext);
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


  if(user){
    return children;
  }
  return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;
