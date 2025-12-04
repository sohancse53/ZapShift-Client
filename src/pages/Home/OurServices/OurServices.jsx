import React from "react";
import serviceImg from "../../../assets/service.png";
const OurServices = () => {
  return (
    <div className="bg-secondary p-10 rounded-xl space-y-5">
      <h1 className="text-2xl font-bold text-center text-white">Our Services</h1>
      <p className="text-center text-white">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero
        hassle. From personal packages to business shipments — we deliver on
        time, every time.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* card */}
        <div className="flex flex-col justify-center items-center p-5 shadow-lg rounded-2xl hover:bg-primary space-y-4 text-center bg-white">
          <img src={serviceImg} alt="" />
          <h3 className="text-secondary text-xl font-bold mb-auto">
            Express & Standard Delivery
          </h3>
          <p className="flex-1"> 
            We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet,
            Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6
            hours from pick-up to drop-off.
          </p>
        </div>
        {/* card */}
        <div className="flex flex-col justify-center items-center p-5 shadow-lg rounded-2xl hover:bg-primary space-y-4 text-center bg-white">
          <img src={serviceImg} alt="" />
          <h3 className="text-secondary text-xl font-bold mb-auto">
            Nationwide Delivery
          </h3>
          <p className="flex-1">
            We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.
          </p>
        </div>
        {/* card */}
        <div className="flex flex-col justify-center items-center p-5 shadow-lg rounded-2xl hover:bg-primary space-y-4 text-center bg-white">
          <img src={serviceImg} alt="" />
          <h3 className="text-secondary text-xl font-bold mb-auto">
            Fulfillment Solution
          </h3>
          <p className="flex-1">
            We also offer customized service with inventory management support, online order processing, packaging, and after sales support.
          </p>
        </div>
        {/* card */}
        <div className="flex flex-col justify-center items-center p-5 shadow-lg rounded-2xl hover:bg-primary space-y-4 text-center bg-white">
          <img src={serviceImg} alt="" />
          <h3 className="text-secondary text-xl font-bold mb-auto">
            Cash on Home Delivery
          </h3>
          <p className="flex-1">
            100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.
          </p>
        </div>
        {/* card */}
        <div className="flex flex-col justify-center items-center p-5 shadow-lg rounded-2xl hover:bg-primary space-y-4 text-center bg-white">
          <img src={serviceImg} alt="" />
          <h3 className="text-secondary text-xl font-bold mb-auto">
            Corporate Service / Contract In Logistics
          </h3>
          <p className="flex-1">
            Customized corporate services which includes warehouse and inventory management support.
          </p>
        </div>
        {/* card */}
        <div className="flex flex-col justify-center items-center p-5 shadow-lg rounded-2xl hover:bg-primary space-y-4 text-center bg-white">
          <img src={serviceImg} alt="" />
          <h3 className="text-secondary text-xl font-bold mb-auto">
            Parcel Return
          </h3>
          <p className="flex-1">
            Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
