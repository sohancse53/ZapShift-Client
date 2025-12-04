import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { FaUserAltSlash, FaUserMinus, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";

const UsersManagement = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [searchText,setSearchText]= useState('');
  const { data: users = [], refetch,isLoading } = useQuery({
    queryKey: ["users",searchText],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users?searchText=${searchText}`);
      return res.data;
    },
  });

  const handleMakeAdmin = (user) => {
    // console.log(id);
    const roleInfo = { role: "admin" };

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Make Admin!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/users/${user?._id}/role`, roleInfo).then((res) => {
          console.log(res.data);
          if (res.data.modifiedCount) {
            refetch();
            Swal.fire({
              title: "Admin!",
              text: "Making Admin successfully.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  const handleRemoveAdmin = (user) => {
    // console.log(id);
    const roleInfo = { role: "user" };

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Remove!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/users/${user?._id}/role`, roleInfo).then((res) => {
          console.log(res.data);
          if (res.data.modifiedCount) {
            refetch();
            Swal.fire({
              title: "Removed from admin!",
              text: "Your have been removed from admin.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <h2 className="text-4xl">Manage Users:- {users?.length}</h2>
      <p>{searchText}</p>
    {/* search field */}
      <label className="input">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input onChange={(e)=>setSearchText(e.target.value)} type="search" className="grow" placeholder="Search Users" />
      </label>
      {
        isLoading?
        <LoadingSpinner/>
        :
        <>
      {/* table */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>User</th>
              <th>Email</th>
              <th>Role</th>
              <th>Admin Actions</th>
              <th>Other Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {users?.map((user, index) => (
              <tr key={user?._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={user?.photoURL} alt={user?.displayName} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user?.displayName}</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td>{user?.email}</td>
                <td>{user?.role}</td>
                <td>
                  {user?.role === "admin" ? (
                    <button
                      onClick={() => handleRemoveAdmin(user)}
                      className="btn bg-red-400"
                    >
                      <FaUserAltSlash />
                    </button>
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn bg-green-400 "
                    >
                      <FaUserShield />
                    </button>
                  )}
                </td>
                <th>actions</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        </>
      }


    </div>
  );
};

export default UsersManagement;
