import React from 'react';
import errorImg from '../../assets/errorImg.png'
import { Link } from 'react-router';
const ErrorPage = () => {
    return (
        <div className='shadow-xl rounded-4xl p-10  flex flex-col justify-center items-center'>
            <img src={errorImg} alt="" />
            <Link to={'/'} className='btn btn-lg rounded-full btn-primary text-secondary'>Go Home</Link>
        </div>
    );
};

export default ErrorPage;