import { Link, useNavigate } from "react-router-dom";
import signUpLogo from "../../../src/assets/allImage/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const SignUp = () => {

    const {createSignUpUsers} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignUp = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const users = {name, email, password}

        console.log(users);
        createSignUpUsers(email, password)
        .then(result =>{
            console.log(result.user);
            if(result.user){
                alert('User sign up successfully');
            }
            e.target.reset();
            navigate('/');

        })
        .catch(error =>{
            console.log(error);
        })
    }

    return (
        <div className="hero min-h-screen bg-base-200 rounded-lg">
            <div className="hero-content flex-col lg:flex-row gap-10">
                <div className="w-1/2 mr-20">
                    <img src={signUpLogo} alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body">
                        <h1 className="text-4xl font-bold text-center mb-4">Sign Up</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" className="input input-bordered" required name="name" />
                        </div>
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
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                        <div className="text-center p-2">
                            <p>Do you have an account? Please <Link to="/signin" className="text-blue-600 font-bold hover:underline hover:
                            underline-offset-2">Sign In</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;