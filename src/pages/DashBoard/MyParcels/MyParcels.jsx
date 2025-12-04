import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaRegEdit } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router";

const MyParcels = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: parcels, refetch } = useQuery({
    queryKey: ["my-parcels", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels?email=${user?.email}`);
      return res.data;
    },
  });

  const handleParcelDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/parcels/${id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your parcel request has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };


  const handlePayment = async(parcel)=>{

    const paymentInfo = {
      cost:parcel.cost,
      parcelId : parcel._id,
      senderEmail: parcel.senderEmail,
      parcelName: parcel.parcelName,
      trackingId:parcel.trackingId
    }

    const res = await axiosSecure.post('/payment-checkout-session',paymentInfo)
    // window.location.href = res.data.url;
    window.location.assign(res.data.url);
  }

  return (
    <div>
      <h2 className="text-3xl font-bold text-center my-4">
        All my parcels - {parcels?.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Cost</th>
              <th>payment </th>
              <th>Tracking ID </th>
              <th>Delivery Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row  */}
            {parcels?.map((parcel, index) => (
              <tr key={parcel._id}>
                <th>{index + 1}</th>
                <td>{parcel.parcelName}</td>
                <td>{parcel.cost}</td>
                <td>
                  {
                  parcel.paymentStatus ?
                  (
                    <span className="text-green-800">Paid</span>
                  ) 
                  : 
                  (
                  
                    <button onClick={()=>handlePayment(parcel)} className="btn btn-primary btn-sm text-black">pay</button>
                   
                  )
                  }
                </td>
                
                <td>
                  <Link data-tip="click to show tracking status" className="tooltip" to={`/parcel-track/${parcel?.trackingId}`}>
                  {parcel.trackingId}
                  </Link>
                </td>

                <td>{parcel.deliveryStatus}</td>
                <td>
                  <button className="btn btn-square hover:bg-primary">
                    <FaRegEdit />
                  </button>
                  <button className="btn btn-square hover:bg-primary mx-2">
                    <FaMagnifyingGlass />
                  </button>
                  <button
                    onClick={() => handleParcelDelete(parcel._id)}
                    className="btn btn-square hover:bg-primary"
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyParcels;
