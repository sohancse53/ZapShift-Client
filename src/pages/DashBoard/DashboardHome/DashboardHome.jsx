import React from 'react';
import useRole from '../../../hooks/useRole';
import LoadingSpinner from '../../../components/LoadingSpinner/LoadingSpinner';
import AdminDasshboardHome from './AdminDasshboardHome';
import RiderDashboardHome from './RiderDashboardHome';
import UserDashboardHome from './UserDashboardHome';

const DashboardHome = () => {
    const {role,roleLoading} = useRole();
    
    if(roleLoading){
        return <LoadingSpinner/>
    }

    if(role.role === 'admin'){
        return <AdminDasshboardHome/>
    }
    else if(role.role === 'rider'){
        return <RiderDashboardHome/>
    }
    else{
        return <UserDashboardHome/>
    }
   
};

export default DashboardHome;