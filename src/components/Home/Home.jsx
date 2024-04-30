import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Banner2 from "./Banner2";
import BrowseCollection from "./BrowseCollection";
import FeaturedProducts from "./FeaturedProducts";

import OurTeam from "./OurTeam";
import SomeFeatures from "./SomeFeatures";

const Home = () => {
  return (
    <div className="">
      <Helmet>
        <title>scas | Home</title>
      </Helmet>
      <Banner></Banner>
      <Banner2></Banner2>
      <SomeFeatures></SomeFeatures>
      <div className="w-full md:max-w-6xl mx-auto">
        <FeaturedProducts></FeaturedProducts>
        <BrowseCollection></BrowseCollection>
        {/* <OurClient></OurClient> */}
        <OurTeam></OurTeam>
      </div>
    </div>
  );
};

export default Home;
