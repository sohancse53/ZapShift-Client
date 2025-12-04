import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaCheck, FaEye, FaTrash } from "react-icons/fa";
import { IoPersonRemove } from "react-icons/io5";
import Swal from "sweetalert2";
const ApproveRiders = () => {
  const axiosSecure = useAxiosSecure();

  const { data: riders = [], refetch } = useQuery({
    queryKey: ["riders", "pending"],
    queryFn: async () => {
      const res = await axiosSecure.get("/riders");
      return res.data;
    },
  });

  const updateRiderStatus = (rider, status) => {
    console.log(rider);
    const updateInfo = { status: status ,email:rider.email};
    axiosSecure.patch(`/riders/${rider._id}`, updateInfo).then((res) => {
      if (res.data.modifiedCount) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Rider status is set to ${status}`,
          showConfirmButton: false,
          timer: 2500,
        });
      }
    });
  };


  const handleApproval = (rider) => {
    updateRiderStatus(rider, "approved");
  };

  const handleRejection = (rider) => {
    updateRiderStatus(rider, "rejected");
  };


//   delete a rider
  const handleRiderDelete = (id) => {
    // console.log(id);

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

        axiosSecure.delete(`riders/${id}`).then((res) => {
          if (res.data.deletedCount) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "you deleted a rider.",
              icon: "success",
            });
          }
        });
      }
    });


  };


  return (
    <div>
      <h2 className="text-5xl">Riders Pending Approval: {riders.length}</h2>

      {/* table section*/}
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>email</th>
              <th>district</th>
              <th>Application status</th>
              <th>Work status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/*dynamic row  */}

            {riders.map((rider, index) => (
              <tr key={rider._id}>
                <th>{index + 1}</th>
                <td>{rider.name}</td>
                <td>{rider.email}</td>
                <td>{rider.district}</td>
                <td
                  className={`font-semibold ${
                    rider.status === "approved"
                      ? "text-green-400"
                      : `${
                          rider.status === "rejected"
                            ? "text-red-400"
                            : "text-black"
                        }`
                  }`}
                >
                  {rider.status}
                </td>
                <td>{rider?.workStatus}</td>
                <td >
                  <button  data-tip="view"
                    
                    className="tooltip tooltip-info btn   rounded-full  "
                  >
                    <FaEye/>
                  </button>
                  <button  data-tip="approve"
                    onClick={() => handleApproval(rider)}
                    className="tooltip tooltip-success btn   rounded-full bg-blue-400 text-white"
                  >
                    <FaCheck />
                  </button>

                  <button  data-tip="reject"
                    onClick={() => handleRejection(rider)}
                    className="tooltip tooltip-error btn  rounded-full bg-red-400 text-white"
                  >
                    <IoPersonRemove  />
                  </button>

                  <button data-tip="delete"
                    onClick={() => handleRiderDelete(rider._id)}
                    className="tooltip tooltip-secondary btn  rounded-full bg-black text-white"
                  >
                    <FaTrash />
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

export default ApproveRiders;
