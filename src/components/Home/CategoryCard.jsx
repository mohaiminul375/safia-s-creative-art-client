import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Fade } from "react-awesome-reveal";
const CategoryCard = ({ category }) => {
  const { category_name,photo } = category;
  return (
    <Fade direction="up"triggerOnce={true}>
    <div className="max-w-lg p-4 shadow-md dark:bg-gray-50 dark:text-gray-800 rounded-lg">
      <Link to={`/category/${category_name}`}>
        <div className="space-y-4 rounded-md">
          <div className="space-y-2">
            <img
              src={photo}
              alt=""
              className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500 lg:transition lg:hover:scale-105"
            />
          </div>
          <div className="space-y-2">
            
              <h3 className="text-3xl mt-10 text-center font-semibold dark:text-[#001220]">
                {category_name}
              </h3>
            
            <div></div>
          </div>
        </div>
      </Link>
    </div>
    </Fade>
  );
};
CategoryCard.propTypes = {
  category: PropTypes.object,
};
export default CategoryCard;
