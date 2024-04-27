import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";

const BrowseCollection = () => {
  const [categories,setCategories]=useState([]);
  useEffect(()=>{
    fetch('http://localhost:5000/categories')
    .then(res=>res.json())
    .then(data=>{console.log(data)
    setCategories(data)
    });
  },[])
  return (
    <div className="mt-28">
      <div className="flex justify-between">
        <h3 className="text-2xl font-bold">Browse Our Categories</h3>
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
