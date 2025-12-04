import React from 'react';
import liveTracking from '../../../assets/live-tracking.png'
import safeDelivery from '../../../assets/safe-delivery.png'

const Supports = () => {
    return (
        <div className='flex flex-col gap-5 border-y border-secondary border-dashed py-10'>

            {/* card */}
            <div className='flex flex-col md:flex-row items-center justify-between gap-10 p-8 shadow rounded-2xl'>
            <img className='' src={liveTracking} alt="" />
           
            <div className='border-l-4 border-secondary border-dashed px-8 py-4'>
                <h3 className='text-secondary text-2xl font-bold'>Live Parcel Tracking</h3>
                <p>Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.</p>
            </div>
            </div>

            {/* card */}
            <div className='flex flex-col md:flex-row items-center justify-between gap-10 p-8 shadow rounded-2xl'>
            <img className='' src={safeDelivery} alt="" />
           
            <div className='border-l-4 border-secondary border-dashed px-8 py-4'>
                <h3 className='text-secondary text-2xl font-bold'>100% Safe Delivery</h3>
                <p>We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.</p>
            </div>
            </div>

            {/* card */}
            <div className='flex flex-col md:flex-row items-center justify-between gap-10 p-8 shadow rounded-2xl'>
            <img className='' src={safeDelivery} alt="" />
           
            <div className='border-l-4 border-secondary border-dashed px-8 py-4'>
                <h3 className='text-secondary text-2xl font-bold'>24/7 Call Center Support</h3>
                <p>Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.</p>
            </div>
            </div>
        </div>
    );
};

export default Supports;