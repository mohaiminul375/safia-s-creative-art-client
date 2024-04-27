import { useLoaderData } from "react-router-dom";
import SingleItem from "../SingleItem/SingleItem";

const AllArtCraft = () => {
  const allArtCraft = useLoaderData();
//   console.log(allArtCraft);
  return (
    <div className="md:max-w-6xl mx-auto">
      <div className="my-12">
        <h2 className="text-center text-5xl font-bold font-rancho">
          Explore Our All Art and Craft
        </h2>
        <div className="grid md:grid-cols-3 gap-5 mt-10">{allArtCraft.map(craft=><SingleItem key={craft._id} craft={craft}></SingleItem>)}</div>
      </div>
    </div>
  );
};

export default AllArtCraft;
