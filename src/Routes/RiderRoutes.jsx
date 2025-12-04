import React from 'react';
import useRole from '../hooks/useRole';
import useAuth from '../hooks/useAuth';
import Forbidden from '../components/Forbidden/Forbidden';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';

const RiderRoutes = ({children}) => {
   const {user,loading}  = useAuth();
   const {role,roleLoading} = useRole()
   if(loading || !user || roleLoading){
    return <LoadingSpinner/>
   }
   if(role.role!=='rider'){
    return <Forbidden/>
   }
    return children
};

export default RiderRoutes;