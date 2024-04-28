import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SingleItem from "../pages/SingleItem/SingleItem";

const FeaturedProducts = () => {
  const [crafts, setCrafts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allArt&Crafts")
      .then((res) => res.json())
      .then((data) => {
        const dataSlice = data.slice(0, 6)
        console.log(dataSlice);
        setCrafts(dataSlice);
      });
  }, []);
  return (
    <div className="mt-28">
      <div className="flex justify-between px-8">
        <h3 className="text-2xl font-bold">Our Featured Collections</h3>
        <p className="text-lg border-b-2 border-black hover:font-bold hidden md:flex">
          <Link to='/allArt&Craft'>view all</Link>
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-5 mt-10">
        {
        crafts.map(craft=><SingleItem key={craft._id} craft={craft}></SingleItem>)
        }
         <p className="text-lg underline hover:font-bold md:hidden text-center">
          <Link to='/allArt&Craft'>view all</Link>
        </p>
      </div>
    </div>
  );
};

export default FeaturedProducts;
