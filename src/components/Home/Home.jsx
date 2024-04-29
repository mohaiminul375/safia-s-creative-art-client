import { useEffect, useRef } from "react";
import Banner from "./Banner";
import Banner2 from "./Banner2";
import BrowseCollection from "./BrowseCollection";
import FeaturedProducts from "./FeaturedProducts";

import OurTeam from "./OurTeam";
import SomeFeatures from "./SomeFeatures";

const Home = () => {
  // const getTheme = localStorage.getItem('theme');
  // console.log('theme from home')
  // const themeVale = useValue();
  // console.log("theme value i  n home", themeVale);
  // const elementRef = useRef();
  // useEffect(() => {
  //   console.log(elementRef.current.id);
  // }, []);

  return (
    <div id="homePage">
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
