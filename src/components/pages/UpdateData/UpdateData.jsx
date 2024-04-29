import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { FaXmark } from "react-icons/fa6";
import './UpdateData.css'
import { Bounce, toast } from "react-toastify";
const UpdateData = ({ singleData }) => {
  const {
    _id,
    item_name,
    customization,
    subcategory_Name,
    photo,
    price,
    rating,
    stockStatus,
    description,
    processing_time,
  } = singleData;
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (updateData) => {
    console.log("form data", updateData);

    fetch(`https://safias-creative-art-server.vercel.app/Art&Crafts/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success('🦄 Wow so easy!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
          // location.reload();
        }
      });
  };

  return (
    <div className="">
      <div className="flex justify-end">
        <form method="dialog">
          <button className="text-xl rounded-full p-2 bg-[#001220] text-white tooltip tooltip-left" data-tip='close page'><FaXmark/></button>
        </form>
      </div>
      <div className="font-bold text-center text-2xl  ">
        Update Art and Craft of:{item_name}
      </div>
          <div className="mt-5">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
              {/* row1 */}
              <div className="md:flex gap-5">
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span>Item Name</span>
                  </label>
                  <input
                    className="input input-bordered"
                    type="text"
                    name="itemName"
                    id="itemName"
                    defaultValue={item_name}
                    placeholder="input your item name"
                    required
                    {...register("item_name")}
                  />
                </div>
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span>Please Select a sub category</span>
                  </label>
                  <select
                    defaultValue={subcategory_Name}
                    {...register("subcategory_Name")}
                    className="select select-bordered w-full"
                    required
                  >
                    <option value="">Please select an option</option>
                    <option>Embroidery</option>
                    <option>Knitting & Crocheting</option>
                    <option>Quilting</option>
                    <option>Beadwork</option>
                    <option>Tie-Dyeing</option>
                    <option>Macrame</option>
                  </select>
                </div>
              </div>
              {/* row3 */}
              <div className="md:flex gap-5">
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span>Price</span>
                  </label>
                  <input
                    className="input input-bordered"
                    type="text"
                    name="price"
                    id="price"
                    defaultValue={price}
                    {...register("price")}
                    placeholder="input price"
                    required
                  />
                </div>
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span>Rating</span>
                  </label>
                  <input
                    className="input input-bordered"
                    type="text"
                    name="rating"
                    id="rating"
                    defaultValue={rating}
                    {...register("rating")}
                    placeholder="input rating"
                    required
                  />
                </div>
              </div>
              {/* row4 */}
              <div className="md:flex gap-5">
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span>Customization</span>
                  </label>
                  <select
                    defaultValue={customization}
                    {...register("customization")}
                    required
                    className="select select-bordered w-full"
                  >
                    <option value="">Please select an option</option>
                    <option>yes</option>
                    <option>no</option>
                  </select>
                </div>
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span>Processing time</span>
                  </label>
                  <input
                    className="input input-bordered"
                    type="text"
                    name="time"
                    id="item"
                    defaultValue={processing_time}
                    {...register("processing_time")}
                    placeholder="input processing time"
                    required
                  />
                </div>
              </div>
              {/* row5 */}
              <div className="md:flex gap-5">
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span>Stock status</span>
                  </label>
                  <select
                    defaultValue={stockStatus}
                    {...register("stockStatus")}
                    required
                    className="select select-bordered w-full"
                  >
                    <option value="">please select a option</option>
                    <option>In stock</option>
                    <option>Made to Order</option>
                  </select>
                </div>
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span>Photo URL</span>
                  </label>
                  <input
                    className="input input-bordered"
                    type="text"
                    name="photo"
                    id="photo"
                    defaultValue={photo}
                    {...register("photo")}
                    placeholder="input your photo URL"
                    required
                  />
                </div>
              </div>
              <div className="form-control">
                <label className="label">Description</label>
                <textarea
                  className="input input-bordered"
                  name="description"
                  id="description"
                  defaultValue={description}
                  {...register("description")}
                  cols="5"
                  rows="30"
                ></textarea>
              </div>
              <div className="form-control">
                <input
                  className="w-full cursor-pointer bg-[#001220] text-white font-rancho text-xl py-3 rounded-md"
                  type="submit"
                  value="Update Item"
                />
              </div>
            </form>
          </div>
    </div>
  );
};

export default UpdateData;
