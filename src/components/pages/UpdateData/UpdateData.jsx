import { Button, Modal } from "react-daisyui";
import { useForm } from "react-hook-form";
const UpdateData = ({ Dialog, singleData }) => {
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
  const onSubmit = (data) => {
    console.log("form data", data);
  };
 

  return (
    <div>
      <Dialog className="max-w-6xl">
        <Modal.Actions className="mt-0">
          <form method="dialog">
            <Button>Close</Button>
          </form>
        </Modal.Actions>
        <Modal.Header className="font-bold text-center">
          Update Art and Craft of:{item_name}
        </Modal.Header>
        <Modal.Body>
          <div>
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
                    {...register('subcategory_Name')}
                    className="select select-bordered w-full"
                    required
                    >
                      <option value=''>please select a option</option>
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
                      <option value=''>please select a option</option>
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
                       <option value=''>please select a option</option>
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
        </Modal.Body>
      </Dialog>
    </div>
  );
};

export default UpdateData;
