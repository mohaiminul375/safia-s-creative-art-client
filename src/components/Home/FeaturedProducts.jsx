import { Link } from "react-router-dom";

const FeaturedProducts = () => {
  return (
    <div className="mt-28">
      <div className="flex justify-between">
        <h3 className="text-2xl font-bold">Our Featured Collections</h3>
        <p className="text-lg border-b-2 border-black hover:font-bold">
          <Link>view all</Link>
        </p>
      </div>
    </div>
  );
};

export default FeaturedProducts;
