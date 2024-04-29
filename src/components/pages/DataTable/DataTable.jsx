import React from "react";
import { Link } from "react-router-dom";

const DataTable = ({craft, idx}) => {
    const {_id,item_name,subcategory_Name,stockStatus}=craft;
  return (
    <tr>
      <th>{idx+1}</th>
      <td>{item_name}</td>
      <td>{subcategory_Name}</td>
      <td>{stockStatus}</td>
      <td>
        <button className="px-3 py-2 bg-[#001220] text-white rounded-xl">
            <Link to={`/Art&CraftDetails/${_id}`}>View Details</Link>
        </button>
      </td>
    </tr>
  );
};

export default DataTable;
