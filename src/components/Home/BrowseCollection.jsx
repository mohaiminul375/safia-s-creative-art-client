import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";

const BrowseCollection = () => {
  const [categories,setCategories]=useState([]);
  useEffect(()=>{
    fetch('https://safias-creative-art-server.vercel.app/categories')
    .then(res=>res.json())
    .then(data=>{
    setCategories(data)
    });
  },[])
  return (
    <div className="mt-28">
      <div className="flex justify-between px-8">
        <h3 className="text-4xl font-bold text-base-content">Browse Our Categories</h3>
      </div>
      <div className="grid md:grid-cols-3 gap-5 mt-10">
        {
         categories.map(category=><CategoryCard key={category._id} category={category}></CategoryCard>)
        }
      </div>
    </div>
  );
};

export default BrowseCollection;
