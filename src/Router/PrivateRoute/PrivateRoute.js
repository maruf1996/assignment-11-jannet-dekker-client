import { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const PrivateRoute = ({ children }) => {
    const {user,loading}=useContext(AuthContext);
    const location=useLocation();

    if(loading){
        return  <div className='text-center'><Spinner animation="border" variant="dark" /></div>
    }

    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default PrivateRoute;