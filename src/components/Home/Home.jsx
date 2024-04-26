import Banner from "./Banner";
import BrowseCollection from "./BrowseCollection";
import FeaturedProducts from "./FeaturedProducts";
import OurClient from "./OurClient";
import OurTeam from "./OurTeam";
import SomeFeatures from "./SomeFeatures";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
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
