import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`payments?email=${user.email}`);
      return res.data;
    },
  });

  return (
    <div>
      <h2 className="text-5xl font-bold">Payment History -{payments.length}</h2>

      {/* table  to show payments of a user who logged in*/}

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Tracking</th>
              <th>Amount</th>
              <th>Paid Time</th>
              <th>Transaction ID</th>
            </tr>
          </thead>
          <tbody>
            {/* row */}
          

            {
                payments.map((payment,index)=> 
                 <tr key={payment._id}>
                    <th>{index+1}</th>
                    <td>{payment.trackingId}</td>
                    <td>${payment.amount}</td>
                    <td>{payment.paidAt}</td>
                    <td>{payment.transactionId}</td>
                </tr>
                )
            }
      
         
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
