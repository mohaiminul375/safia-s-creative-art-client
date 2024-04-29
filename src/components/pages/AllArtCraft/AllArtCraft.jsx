import { useLoaderData } from "react-router-dom";
import SingleItem from "../SingleItem/SingleItem";
import DataTable from "../DataTable/DataTable";

const AllArtCraft = () => {
  const allArtCraft = useLoaderData();
  //   console.log(allArtCraft);
  return (
    <div className="md:max-w-6xl mx-auto">
      <div className="my-12">
        <h2 className="text-center text-5xl font-bold font-rancho">
          Explore Our All Art and Craft
        </h2>
        <div className="w-full mt-10">
          {/* {allArtCraft.map(craft=><SingleItem key={craft._id} craft={craft}></SingleItem>)} */}
          <div className="overflow-x-auto">
            <table className="table table-zebra text-center">
              {/* head */}
              <thead>
                <tr className="text-base">
                  <th>Sl No</th>
                  <th>Item Name</th>
                  <th>Category</th>
                  <th>Stock Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {allArtCraft.map((craft, idx) => (
                  <DataTable key={idx} idx={idx} craft={craft}></DataTable>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllArtCraft;
