import { useLoaderData, useNavigate } from "react-router-dom";
import ServicesBanner from "../SharedPage/ServicesBanner/ServicesBanner";
import Swal from 'sweetalert2'
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";


const CheckOut = () => {

    const services = useLoaderData();
    const { title, _id, price, img } = services;
    const navigate = useNavigate();

    const { users } = useContext(AuthContext);

    const handleCheckOut = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const lastName = form.lastName.value;
        const email = form.email.value;
        const phoneNumber = form.phoneNumber.value;
        const order = {
            customerName: name +lastName,
            img,
            title,
            customerEmail: email,
            phoneNumber,
            price: price,
            service_id: _id
        }
        console.log(order);
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: "Success!",
                        text: "Order Confirmed",
                        icon: "success"
                    })
                    navigate('/');
                }
            })
    }

    return (
        <div className="mt-8">
            <ServicesBanner></ServicesBanner>
            <p className="text-center font-bold text-4xl p-4">{title}</p>
            <form onSubmit={handleCheckOut} className="card-body">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label font-bold text-xl">
                            <span className="label-text">First Name</span>
                        </label>
                        <input type="text" placeholder="First Name" className="input input-bordered" name="name" required defaultValue={users?.displayName} />
                    </div>
                    <div className="form-control">
                        <label className="label font-bold text-xl">
                            <span className="label-text">Last Name</span>
                        </label>
                        <input type="text" name="lastName" placeholder="Last Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label font-bold text-xl">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Your Email" name="email" className="input input-bordered" required defaultValue={users?.email} />
                    </div>
                    <div className="form-control">
                        <label className="label font-bold text-xl">
                            <span className="label-text">Phone Number</span>
                        </label>
                        <input type="number" name="phoneNumber" placeholder="Phone Number" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label font-bold text-xl">
                            <span className="label-text">Due Amount</span>
                        </label>
                        <input type="text" placeholder="Due Amount" className="input input-bordered" required defaultValue={'$ ' + price} />
                    </div>
                    <div className="form-control">
                        <label className="label font-bold text-xl">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name="date" className="input input-bordered" required />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <textarea className="p-6 h-32 input input-bordered mb-6" name="Your message" id="">Your message</textarea>
                    <input className="btn bg-orange-600 text-white btn-block hover:text-black" type="submit" value="Order Confirm" />
                </div>
            </form>
        </div>
    );
};

export default CheckOut;