import { Link, useLocation, useNavigate } from "react-router-dom";
import signUpLogo from "../../../src/assets/allImage/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const SignIn = () => {

    const {signInUsers} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleSignIn = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const users = {email, password}

        console.log(users);

        signInUsers(email, password)
        .then(result =>{
            const user = result.users;
            console.log(user);
            e.target.reset();
            navigate(location?.state ? location?. state : '/');
        })
        .catch(error => console.error(error))
    }

    return (
        <div className="hero min-h-screen bg-base-200 rounded-lg">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-20 mt-8">
                    <img src={signUpLogo} alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignIn} className="card-body">
                        <h1 className="text-4xl font-bold text-center mb-4">Sign In</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required name="email" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required name="password" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign In</button>
                        </div>
                        <div className="text-center p-2">
                            <p>Do not have an account? Please <Link to="/signup" className="font-bold text-blue-600 hover:underline hover:
                            underline-offset-2">Sign Up</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;