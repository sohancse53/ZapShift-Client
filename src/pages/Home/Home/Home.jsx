import React, { Suspense } from 'react';
import Banner from '../Banner/Banner';
import HowItWorks from '../HowItWorks.jsx/HowItWorks';
import OurServices from '../OurServices/OurServices';
import Brands from '../Brands/Brands';
import Reviews from '../Reviews/Reviews';
import Supports from '../Supports/Supports';
import Satisfaction from '../Saticfaction/Satisfaction';
const reviewsPromise = fetch('/reviews.json')
.then(res=>res.json());
const Home = () => {
    return (
        <div className='space-y-10'>
            <Banner/>
            <HowItWorks/>
            <OurServices/>
            <Brands/>
           <Supports/>
           <Satisfaction/>
           <Suspense fallback={<h1>Loading.....</h1>}>
             <Reviews reviewsPromise={reviewsPromise}/>
           </Suspense>
        </div>
    );
};

export default Home;