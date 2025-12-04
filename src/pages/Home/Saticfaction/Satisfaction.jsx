import React from 'react';
import light from '../../../assets/be-a-merchant-bg.png' 
import book from '../../../assets/location-merchant.png' 
const Satisfaction = () => {
    return (
        <div 
        className='relative bg-secondary  flex flex-col md:flex-row justify-center items-center gap-8 p-10 rounded-2xl '
        >
            {/* left */}
            <div className='flex flex-col gap-5'>
                <h3 className='text-3xl font-bold text-white'>Merchant and Customer Satisfaction is Our First Priority</h3>
                <p className='text-white'>We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.</p>
                <div className='flex flex-col md:flex-row gap-4'>
                    <button className='btn btn-primary rounded-full text-secondary'>Become A Merchant</button>
                    <button className='btn btn-ghost border border-primary rounded-full text-primary hover:text-secondary'>Earn with ZapShift Courier</button>
                </div>
            </div>

            {/* right */}
            <img src={book} alt="" />
            <img className='absolute top-0' src={light} alt="" />
        </div>
    );
};

export default Satisfaction;