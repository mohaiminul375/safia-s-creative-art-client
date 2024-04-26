import BrowseCollection from "./BrowseCollection";
import FeaturedProducts from "./FeaturedProducts";
import OurClient from "./OurClient";
import OurTeam from "./OurTeam";
import SomeFeatures from "./SomeFeatures";

const Home = () => {
  return (
    <div>
      <h2>This is home page</h2>
        <SomeFeatures></SomeFeatures>
    <div className="w-full md:max-w-6xl mx-auto">
        <FeaturedProducts></FeaturedProducts>
        <BrowseCollection></BrowseCollection>
        <OurClient></OurClient>
        <OurTeam></OurTeam>
    </div>
    </div>
  );
};

export default Home;
