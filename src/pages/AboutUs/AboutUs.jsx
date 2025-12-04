import React from "react";

const AboutUs = () => {
  return (
    <div className="shadow-lg p-10">
      <h1 className="text-3xl text-primary font-bold">About Us</h1>
      <p>
        Enjoy fast, reliable parcel delivery with real-time tracking and zero
        hassle. From personal packages to business shipments — we deliver on
        time, every time.
      </p>

      {/* tab  */}
      <div className="tabs tabs-border">

        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label="Story"
        />
        <div className="tab-content border-base-300 bg-base-100 p-10 space-y-5">
         <p>We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.</p>

         <p>We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.</p>

         <p>We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.</p>
     
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label="Mission"
          defaultChecked
        />
        <div className="tab-content border-base-300 bg-base-100 p-10">
           <p>We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.</p>
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label="Success"
        />
        <div className="tab-content border-base-300 bg-base-100 p-10">
           <p>We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.</p>
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label="Terms & Other"
        />
        <div className="tab-content border-base-300 bg-base-100 p-10">
           <p>We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.</p>
        </div>

      </div>
    </div>
  );
};

export default AboutUs;
