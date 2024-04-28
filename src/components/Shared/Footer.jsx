import { CiLocationOn } from "react-icons/ci";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import playStore from "../../assets/PlayStore.png"
import appStore from "../../assets/AppStore.png"
import logo from "../../assets/logo.png"
const Footer = () => {
    return (
        <div>
        <footer className="footer p-8 bg-base-200 text-base-content mt-20">
        <aside>
        <img className="w-16" src={logo} alt="" />
        <div>
            <h2 className="font-rancho text-6xl font-bold">Safia's </h2>
            <small className="italic">creative art studio</small>
          </div>
        </aside>
        <nav className="text-center">
          <h6 className="text-xl font-bold text-[#001220]">Contact Us</h6>
          <p className="flex items-center text-xl">
            <CiLocationOn className="text-[#001220]"/> Mirpur,DOHS Dhaka
          </p>
          <p className="">Phone: 09636-969696</p>
          <p className="">email: safia7540@gmail.com</p>
        </nav>
        <nav className="">
          <h6 className="text-xl font-bold text-[#001220]">
            Find Us On social Media
          </h6>
          <div className="text-4xl flex gap-10">
            <Link target="blank" to="https://www.facebook.com/">
              <FaFacebook className="text-[#001220]" />
            </Link>
            <Link target="blank" to="https://twitter.com/">
              <FaXTwitter className="text-[#001220]" />
            </Link>
            <Link target="blank" to="https://www.youtube.com/">
              <FaYoutube className="text-[#001220]" />
            </Link>
          </div>
        </nav>
        <nav>
          <h6 className="text-xl font-bold text-[#001220]">
            Download Our Apps
          </h6>

          <Link target="blank" to="https://play.google.com/">
            <img className="w-44" src={playStore} alt="" />
          </Link>
          <Link target="blank" to="https://www.apple.com/app-store/">
            <img className="w-44" src={appStore} alt="" />
          </Link>
        </nav>
      </footer>
      <footer className="footer footer-center p-4 bg-base-200 text-base-content font-bold">
        <aside>
          <p>Copyright © 2020 - 2024 All right reserved by 
            Safia's Creative art studio
          </p>
        </aside>
      </footer>
      </div>
    );
};

export default Footer;