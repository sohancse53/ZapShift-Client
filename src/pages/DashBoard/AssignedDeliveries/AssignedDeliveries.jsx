import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { GiCancel, GiCardPickup, GiStorkDelivery } from "react-icons/gi";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import Swal from "sweetalert2";
const AssignedDeliveries = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: parcels = [], refetch } = useQuery({
    queryKey: ["parcels", user?.email, "driver_assigned"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/parcels/rider?riderEmail=${user?.email}&deliveryStatus=driver_assigned`
      );

      return res.data;
    },
  });

  const handleDeliveryStatusUpdate = (parcel,status) => {
    console.log(parcel);
    const statusInfo = {
      deliveryStatus: status,
      riderId:parcel?.riderId,
      trackingId: parcel?.trackingId
    };

    let message = `Parcel status is updated with ${status.split('_').join(' ')}`

    axiosSecure
      .patch(`/parcels/${parcel?._id}/status`, statusInfo)
      .then((res) => {
        if (res.data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: message,
            showCancelButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div>
      <h2 className="text-4xl">Parcels Pending pickup - {parcels.length}</h2>

      {/* table */}
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Confirm</th>
              <th>Other Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {parcels.map((parcel, index) => (
              <tr key={parcel?._id}>
                <th>{index + 1}</th>
                <td>{parcel.parcelName}</td>
                <td>
                  {
                  parcel.deliveryStatus === "driver_assigned" ?
                  (
                    <>
                      <button
                        onClick={() => handleDeliveryStatusUpdate(parcel,'rider_arriving')}
                        className="btn btn-primary text-black mr-2"
                      >
                        <IoCheckmarkDoneCircleSharp />
                        Accept
                      </button>
                      <button className="btn btn-warning text-black ">
                        <GiCancel />
                        Reject
                      </button>
                    </>
                  )
                  :
                  <span className="text-green-400 font-semibold">Accepted</span>
                  }
                </td>

                <td>
                    <button
                        onClick={() => handleDeliveryStatusUpdate(parcel,'parcel_picked_up')}
                        className="btn btn-primary text-black mr-2"
                      >
                       
                        Mark as Picked Up
                      </button>
                    <button
                        onClick={() => handleDeliveryStatusUpdate(parcel,'parcel_delivered')}
                        className="btn btn-info text-black "
                      >
                        
                        Mark as Delivered
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

export default AssignedDeliveries;
