import { Link } from "react-router-dom";
import PropTypes from "prop-types";


const CategoryDataCard = ({data}) => {

    const {
        _id,
        item_name,
        subcategory_Name,
        photo,
        price,
        rating,
        stockStatus,
        processing_time
      } = data;
    return (
        <div className="max-w-lg p-4 shadow-md dark:bg-gray-50 dark:text-gray-800">
        <div className="space-y-4">
          <div className="space-y-2">
            <img
              src={photo}
              alt=""
              className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
            />
          </div>
          <div className="space-y-2">
          
              <h3 className="text-xl font-semibold dark:text-[#001220] hover:underline tooltip tooltip-bottom" data-tip={item_name}>
                {item_name.length>30? item_name.slice(0,20)+"...": item_name}
              </h3>
            
  
            <p className="dark:text-gray-600 text-lg">
              <span className="font-bold text-[#001220]">Category:</span>{" "}
              {subcategory_Name}
            </p>
            <p className=" dark:text-gray-600 text-xl">
              <span className="font-bold text-[#001220]">Stock:</span>{" "}
              {stockStatus}
            </p>
  
            <div className="flex justify-between">
              <p className="text-base font-bold dark:text-gray-600 hover:text-[#001220]">
                <span className="text-[#001220]">Price:</span> ${price}
              </p>
              <p className="text-base font-bold dark:text-gray-600 hover:text-[#001220]">
                <span className="text-[#001220]">Rating:</span> {rating}
              </p>
            </div>
            <div>
            <p className="text-base font-bold dark:text-gray-600 hover:text-[#001220]">
                <span className="text-[#001220]">Processing time:</span> {processing_time}
              </p>
            </div>
            <Link to={`/Art&CraftDetails/${_id}`}>
              <button className="mt-5 text-center w-full py-2 border border-[#001220] hover:bg-[#001220] hover:text-white hover:transition-opacity">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
};
CategoryDataCard.propTypes = {
  data: PropTypes.object,

};
export default CategoryDataCard;