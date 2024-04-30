import { useLoaderData, useParams } from "react-router-dom";
import CategoryDataCard from "../CategoryDataCard/CategoryDataCard";
import { Helmet } from "react-helmet-async";

const CategoryData = () => {
  const artAndCraftData = useLoaderData();
  // console.log(data);
  const { categoryName } = useParams();
  // console.log('params',category)
  return (
    <div>
      <Helmet>
        <title>scas | {categoryName}</title>
      </Helmet>
      <h2 className="mt-12 text-center text-5xl font-bold font-rancho">
        Art&Craft of: {categoryName} Category
      </h2>
      <div className="grid md:grid-cols-3 gap-5 mt-10">
        {artAndCraftData.map((data) => (
          <CategoryDataCard key={data._id} data={data}></CategoryDataCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryData;
