import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import "./UpdateData.css";
import { Bounce, ToastContainer, toast } from "react-toastify";
import { useLoaderData } from "react-router-dom";
const UpdateData = () => {
  const singleData = useLoaderData();
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
  const { register, handleSubmit } = useForm();
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
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "success",
            text: "Your Art&Craft data has been updated",
            icon: "success"
          });
          // location.reload();
        }
      });
  };

  return (
    <div className="w-full bg-base-200 md:max-w-6xl mx-auto mt-12 border p-3 rounded-lg">
      <div className="font-bold text-center text-2xl  ">
        <h2 className="text-5xl font-bold font-rancho">
          Update Art and Craft of:{item_name}
        </h2>
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
      <ToastContainer />
    </div>
  );
};

export default UpdateData;
