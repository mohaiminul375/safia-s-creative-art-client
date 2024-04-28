import { CiClock1, CiDeliveryTruck } from "react-icons/ci";
import { GiReturnArrow } from "react-icons/gi";

const SomeFeatures = () => {
  return (
    <div className="bg-[#F4F4F5] py-5 mt-28">
      <div className="flex justify-evenly gap-3 w-full md:max-w-6xl mx-auto">
        <div className="flex items-center gap-2">
          <CiDeliveryTruck className="text-5xl" />
          <div>
            <h4 className="text-base font-bold">Free Shipping</h4>
            <p className="text-sm">Free shipping on purchase over 50$</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <CiClock1 className="text-5xl" />
          <div>
            <h4 className="text-base font-bold">Super Fast Delivery</h4>
            <p className="text-sm">
              Get super Fast delivery <br />
              inside Dhaka in 2days and outside Dhaka in 5 days
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <GiReturnArrow className="text-5xl" />
          <div>
            <h4 className="text-base font-bold">Return Policy</h4>
            <p className="text-sm">7 days return Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SomeFeatures;
