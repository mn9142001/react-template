import { Navigate } from 'react-router-dom';
import IsAuthenticated from '../hooks/is_anonymous';

const NotLoggedIn = e => {
    return <Navigate to={"/login/"} />

}

const ProtectedComponent = ({component}) => {
    const is_user = IsAuthenticated();
    if (!is_user) return <NotLoggedIn />
    
    return component    
}

export default ProtectedComponent