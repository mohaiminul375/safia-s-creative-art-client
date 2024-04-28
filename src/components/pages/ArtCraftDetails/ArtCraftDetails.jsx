import { useLoaderData } from "react-router-dom";

const ArtCraftDetails = () => {
  const artData = useLoaderData();
  console.log(artData);
  const {
    photo,
    item_name,
    subcategory_Name,
    description,
    price,
    rating,
    customization,
    stockStatus,
    processing_time,
  } = artData;
  return (
    <div className="mt-12">
      <div className="w-full md:max-w-5xl border mx-auto p-5 rounded-lg bg-base-200">
        <div className="flex flex-col md:flex-row">
          <img className="rounded-md" src={photo} alt={`Image of ${item_name}`} />
          <div className="mt-5 md:ml-10">
            <h2 className="text-xl">
              <span className="font-bold">Item Name:</span>{" "}
              <span className=" text-gray-600 hover:text-[#001220] hover:font-bold">
                {item_name}
              </span>
            </h2>
            <h2 className="text-xl">
              <span className="font-bold">Sub-Category Name:</span>
              <span className="text-xl text-gray-600 hover:text-[#001220] hover:font-bold">
                {subcategory_Name}
              </span>
            </h2>
            <p className="mt-3">
              <span className="font-bold">Description:</span>{" "}
              <span className=" text-gray-600 hover:text-[#001220] hover:font-bold">
                {description}
              </span>
            </p>
            <div className="flex justify-between mt-3">
              <p>
                <span className="font-bold">Price:</span>{" "}
                <span className=" text-gray-600 hover:text-[#001220] hover:font-bold">
                  ${price}
                </span>
              </p>
              <p>
                <span className="font-bold">Rating:</span>{" "}
                <span className="font-bold">Price:</span>{" "}
                <span className=" text-gray-600 hover:text-[#001220] hover:font-bold">
                  {rating}
                </span>
              </p>
            </div>
            <div className="flex justify-between mt-3">
              <p>
                <span className="font-bold">Customization:</span>{" "}
                <span className=" text-gray-600 hover:text-[#001220] hover:font-bold">
                  {customization}
                </span>
              </p>
              <p>
                <span className="font-bold">Stock:</span>{" "}
                <span className=" text-gray-600 hover:text-[#001220] hover:font-bold">
                  {stockStatus}
                </span>
              </p>
            </div>
            <div className=" mt-3">
              <p>
                <span className="font-bold">Processing time:</span>{" "}
                <span className=" text-gray-600 hover:text-[#001220] hover:font-bold">
                  {processing_time}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtCraftDetails;
