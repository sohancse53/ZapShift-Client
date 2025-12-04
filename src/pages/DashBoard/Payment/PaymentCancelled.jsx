import React from 'react';
import { Link } from 'react-router';

const PaymentCancelled = () => {
    return (
        <div>
            <h1>payment cancel try again</h1>
            <Link className='btn btn-primary' to={"/dashboard/my-parcels"}></Link>
        </div>
    );
};

export default PaymentCancelled;