import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const PaymentSuccess = () => {
    const [searchParams]= useSearchParams();
    const [paymentInfo,setPaymentInfo]= useState({});
    const sessionId = searchParams.get('session_id');
    const axiosSecure = useAxiosSecure();
    console.log(sessionId);
    useEffect(()=>{
        if(sessionId){
            axiosSecure.patch(`/payment-success?session_id=${sessionId}`)
            .then(res=>{
                console.log(res.data);
                setPaymentInfo({
                    transactionId: res.data.transactionId,
                    trackingId:res.data.trackingId
                })
            })
        }
    },[sessionId,axiosSecure])
    
    return (
        <div>
            <h2 className='text-4xl'>payment successful</h2>
            <p>Your tracking id Id :{paymentInfo.trackingId}</p>
            <p>Your Transaction Id :{paymentInfo.transactionId}</p>
        </div>
    );
};

export default PaymentSuccess;