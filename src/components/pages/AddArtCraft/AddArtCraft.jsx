import { useState } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
const AddArtCraft = () => {
  const [categoryOption, setCategoryOption] = useState("");
  const [customizeOption, setCustomizeOption] = useState("");
  console.log("options", categoryOption);
  console.log("options", customizeOption);
  const categoryOptions = [
    { value: "Embroidery", label: "Embroidery" },
    { value: "Knitting & Crocheting", label: "Knitting & Crocheting" },
    { value: "Quilting", label: "Quilting" },
    { value: "Beadwork", label: "Beadwork" },
    { value: "Tie-Dyeing", label: "Tie-Dyeing" },
    { value: "Macrame", label: "Macrame" },
  ];

  const customizeOptions = [
    { value: "yes", label: "yes" },
    { value: "no", label: "no" },
  ];
  const customizeDefaultOption = customizeOptions[0];
  const categoryDefaultOption = categoryOptions[0];
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
          <form className="space-y-3">
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
                />
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span>Please Select a sub category</span>
                </label>
                <Dropdown
                  className=""
                  options={categoryOptions}
                  value={categoryDefaultOption}
                  onChange={(e) => setCategoryOption(e.value)}
                  placeholder="Select an option"
                />
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
                  type="number"
                  name="price"
                  id="price"
                  placeholder="input price"
                />
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span>Rating</span>
                </label>
                <input
                  className="input input-bordered"
                  type="number"
                  name="rating"
                  id="rating"
                  placeholder="input rating"
                />
              </div>
            </div>
            {/* row4 */}
            <div className="md:flex gap-5">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span>Customization</span>
                </label>
                <Dropdown
                  className=""
                  options={customizeOptions}
                  value={customizeDefaultOption}
                  onChange={(e) => setCustomizeOption(e.value)}
                  placeholder="Select an option"
                />
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
                />
              </div>
            </div>
            {/* row5 */}
            <div className="md:flex gap-5">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span>Stock status</span>
                </label>
                <input
                  className="input input-bordered"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="stock status"
                />
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
                  placeholder="input your photo URL"
                />
              </div>
            </div>
            <div className="form-control">
              <input className="w-full bg-[#001220] text-white font-rancho text-xl py-3 rounded-md" type="submit" value="Add Item" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddArtCraft;
