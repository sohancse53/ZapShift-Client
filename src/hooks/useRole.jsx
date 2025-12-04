import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useRole = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const {data:role='user',isLoading:roleLoading} = useQuery({
        queryKey:['user-role',user?.email],
        queryFn:async()=>{
            const res = await axiosSecure.get(`/users/${user.email}/role`)
            console.log('in use role',res.data);
            return res.data;
        }
    })
    return {roleLoading,role}
};

export default useRole;