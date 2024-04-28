import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const CategoryCard = ({ category }) => {
  const { category_name,photo } = category;
  return (
    <div className="max-w-lg p-4 shadow-md dark:bg-gray-50 dark:text-gray-800">
      <Link to={`/category/${category_name}`}>
        <div className="space-y-4">
          <div className="space-y-2">
            <img
              src={photo}
              alt=""
              className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
            />
          </div>
          <div className="space-y-2">
            <a rel="noopener noreferrer" href="#" className="block">
              <h3 className="text-3xl mt-10 text-center font-semibold dark:text-[#001220]">
                {category_name}
              </h3>
            </a>
            <div></div>
          </div>
        </div>
      </Link>
    </div>
  );
};
CategoryCard.propType = {
  category: PropTypes.object,
};
export default CategoryCard;
