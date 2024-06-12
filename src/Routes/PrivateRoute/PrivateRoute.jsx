import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({ children }) => {

    const { users, loading } = useContext(AuthContext);

    const location = useLocation();

    if (loading) {
        return <p className="text-center"><span className="loading loading-bars loading-lg"></span></p>
    }

    if (users?.email) {
        return children;
    }

    return <Navigate state={location.pathname} to='/signin' replace></Navigate>;
};

export default PrivateRoute;