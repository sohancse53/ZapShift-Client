import React from 'react';
import van from '../../../assets/bookingIcon.png'
const HowItWorks = () => {
    return (
        <div className=''>
            <h1 className='text-secondary font-bold text-2xl'>How It Works</h1>
        <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                {/* card */}
            <div className='shadow-lg p-6 rounded-xl space-y-3'>
                <img src={van} alt="" />
                <h3 className='text-secondary font-bold'>Booking Pick & Drop</h3>
                <p className='text-gray-600'>From personal packages to business shipments — we deliver on time, every time.</p>
            </div>
            {/* card */}
            <div className='shadow-lg p-6 rounded-xl space-y-3'>
                <img src={van} alt="" />
                <h3 className='text-secondary font-bold'>Cash On Delivery</h3>
                <p className='text-gray-600'>From personal packages to business shipments — we deliver on time, every time.</p>
            </div>
            {/* card */}
            <div className='shadow-lg p-6 rounded-xl space-y-3'>
                <img src={van} alt="" />
                <h3 className='text-secondary font-bold'>Delivery Hub</h3>
                <p className='text-gray-600'>From personal packages to business shipments — we deliver on time, every time.</p>
            </div>
            {/* card */}
            <div className='shadow-lg p-6 rounded-xl space-y-3'>
                <img src={van} alt="" />
                <h3 className='text-secondary font-bold'>Booking SME & Corporate</h3>
                <p className='text-gray-600'>From personal packages to business shipments — we deliver on time, every time.</p>
            </div>
        </div>
        </div>
    );
};

export default HowItWorks;