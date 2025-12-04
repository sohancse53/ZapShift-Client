import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const ReviewCard = ({ review }) => {
  const { userName, review: testimonial,user_photoURL } = review;
  return (
    <div className="card bg-base-100 shadow-md p-6 rounded-xl border border-gray-200 max-w-sm">
      {/* Quote Icon */}
      <FaQuoteLeft className="text-3xl text-cyan-300 mb-4" />

      {/* Review Text */}
      <p className=" mb-4">{testimonial}</p>

      {/* Divider */}
      <div className="border-t border-dashed border-gray-300 my-4"></div>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-teal-900">
            <img className="w-full h-full rounded-full" src={user_photoURL} alt="" />
        </div>

        <div>
          <h3 className="font-semibold text-teal-900">{userName}</h3>
          <p className=" text-sm">Senior Product Designer</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
