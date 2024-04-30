
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const DataTable = ({ craft, idx }) => {
  const { _id, item_name, subcategory_Name, stockStatus } = craft;
  return (
    <tr className="text-base-content">
      <th>{idx + 1}</th>
      <td>{item_name}</td>
      <td>{subcategory_Name}</td>
      <td>{stockStatus}</td>
      <td>
        <Link to={`/Art&CraftDetails/${_id}`}>
          <button className="px-3 py-2 bg-[#001220] text-white rounded-xl">
            View Details
          </button>
        </Link>
      </td>
    </tr>
  );
};
DataTable.propTypes={
  craft:PropTypes.obj,
  idx:PropTypes.number
}

export default DataTable;
