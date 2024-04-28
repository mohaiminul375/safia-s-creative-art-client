import { useContext, useState } from "react";
import "react-dropdown/style.css";
import { AuthContext } from "../../../firebase/FirebaseProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
const AddArtCraft = () => {
  const { user } = useContext(AuthContext);

  // react hook form
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    fetch("https://safias-creative-art-server-bmbwsw0zg-mohaiminul375s-projects.vercel.app/allArt&Crafts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          reset();
          Swal.fire({
            title: "Successful!",
            text: "Your added successfully!",
            icon: "success"
          });
        }
      });
  };

  return (
    <div>
      <div className="mt-12 w-full md:max-w-6xl mx-auto border bg-base-200 p-3 rounded-lg">
        <div className="text-center">
          <h2 className="font-rancho font-bold text-5xl">Add Art&Craft</h2>
          <p>
            Prove your creativity by showCase your art and craft in our
            platform.
          </p>
        </div>
        <div className="mt-5">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
            {/* row1 */}
            <div className="md:flex gap-5">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span>User Name</span>
                </label>
                <input
                  className="input input-bordered"
                  type="text"
                  name="userName"
                  id="userName"
                  placeholder="input user name"
                  defaultValue={user?.displayName}
                  {...register('userName')}
                  readOnly
                />
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span>User Email</span>
                </label>
                <input
                  className="input input-bordered"
                  type="text"
                  name="email"
                  id="email"
                  placeholder="input user email"
                  defaultValue={user?.email}
                  {...register("userEmail")}
                  readOnly
                />
              </div>
            </div>
            {/* row2 */}
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
                  placeholder="input your item name"
                  {...register("item_name")}
                  required
                />
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span>Please Select a sub category</span>
                </label>
                <select
                  required
                  {...register("subcategory_Name")}
                  className="select select-bordered w-full"
                >
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
                  placeholder="input price"
                  {...register("price")}
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
                  required
                  {...register("customization")}
                  className="select select-bordered w-full"
                >
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
                  placeholder="input processing time"
                  {...register("processing_time")}
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
                  required
                  {...register("stockStatus")}
                  className="select select-bordered w-full"
                >
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
                cols="5"
                rows="30"
                {...register("description")}
              ></textarea>
            </div>
            <div className="form-control">
              <input
                className="w-full cursor-pointer bg-[#001220] text-white font-rancho text-xl py-3 rounded-md"
                type="submit"
                value="Add Item"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddArtCraft;
