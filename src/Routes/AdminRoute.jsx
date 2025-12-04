import React from 'react';

import useAuth from '../hooks/useAuth';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';
import useRole from '../hooks/useRole';
import Forbidden from '../components/Forbidden/Forbidden';

const AdminRoute = ({children}) => {
   const {user,loading}  = useAuth();
   const {role,roleLoading} = useRole()
   if(loading || roleLoading){
    return <LoadingSpinner/>
   }
   if(role.role!=='admin'){
    return <Forbidden/>
   }
    return children
   
};

export default AdminRoute;