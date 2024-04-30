import { Link } from "react-router-dom";
import error from "../../../assets/Error.jpg"

const ErrorPage = () => {
    return (
        <div className="max-h-screen">
            <img className="md:max-w-3xl mx-auto rounded-md mt-20" src={error} alt="" />
            <div className="text-center mt-10">
            <Link to='/'>
            <button className="px-5 py-3 bg-[#001220] text-white rounded-lg">Back to home</button>
            </Link>
            </div>
        </div>
    );
};

export default ErrorPage;