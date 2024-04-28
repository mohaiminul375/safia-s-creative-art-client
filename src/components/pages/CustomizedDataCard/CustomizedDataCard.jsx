import { FaEdit } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import UpdateData from "../UpdateData/UpdateData";
import { Modal } from "react-daisyui";

const CustomizedDataCard = ({ singleData }) => {
 
  const { _id, item_name, customization, photo, price, rating, stockStatus } =
    singleData;

    const {
        Dialog,
        handleShow
      } = Modal.useDialog();
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
          <a rel="noopener noreferrer" href="#" className="block">
            <h3
              className="text-xl font-semibold dark:text-[#001220] hover:underline tooltip tooltip-bottom"
              data-tip={item_name}
            >
              {item_name.length > 30
                ? item_name.slice(0, 20) + "..."
                : item_name}
            </h3>
          </a>

          <p className="dark:text-gray-600 text-lg">
            <span className="font-bold text-[#001220]">Customization:</span>{" "}
            {customization}
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
          <div className="flex justify-around">
            <button
             onClick={handleShow}
              className="text-3xl text-[#001220] tooltip tooltip-top"
              data-tip="Edit data"
            >
              <FaEdit />
            </button>
            <button
              className="text-3xl text-[#002000] tooltip tooltip-top"
              data-tip="Delete data"
            >
              <FaRegTrashCan />
            </button>
          </div>
          <UpdateData id={_id} Dialog={Dialog}></UpdateData>
        </div>
      </div>
    </div>
  );
};

export default CustomizedDataCard;
