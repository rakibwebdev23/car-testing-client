import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({ children }) => {

    const { users, loading } = useContext(AuthContext);

    if (loading) {
        return <p className="text-center"><span className="loading loading-bars loading-lg"></span></p>
    }

    if (users?.email) {
        return children;
    }

    return <Navigate to='/signin' replace></Navigate>;
};

export default PrivateRoute;