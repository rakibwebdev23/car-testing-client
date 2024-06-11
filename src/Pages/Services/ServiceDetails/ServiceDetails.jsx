import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaArrowRight, FaFileDownload } from 'react-icons/fa';
import DetailsRightNav from "./DetailsRightNav/DetailsRightNav";
import logo from '../../..//assets/allImage/icons/logo.svg'

const ServiceDetails = () => {


    const serviceDetails = useLoaderData();
    // const {name, details} = serviceDetails.facility;
    const { _id, img, title, description, facility, price } = serviceDetails;

    return (
        <div>
            <div className="grid grid-cols-3 w-full gap-16">
                <div className="col-span-2 space-y-8">
                    <div className="">
                        <img className="rounded-lg w-full h-96" src={img} alt="" />
                    </div>
                    <h2 className="text-3xl font-bold">{title}</h2>
                    <h4 className="text-wrap">{description}</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 mb-6">
                        <div className=" w-full border-t-2 border-red-600 rounded-box">
                            <div className="card bg-base-300 rounded-box p-6 space-y-2">
                                <h4 className="text-2xl font-bold">{facility[0].name}</h4>
                                <p className="mt-0">{facility[0].details}</p>
                            </div>
                        </div>
                        <div className=" w-full border-t-2 border-red-600 rounded-box">
                            <div className="card bg-base-300 rounded-box p-6 space-y-2">
                                <h4 className="text-2xl font-bold">{facility[1].name}</h4>
                                <p className="mt-0">{facility[1].details}</p>
                            </div>
                        </div>
                        <div className=" w-full border-t-2 border-red-600 rounded-box">
                            <div className="card bg-base-300 rounded-box p-6 space-y-2">
                                <h4 className="text-2xl font-bold">{facility[2].name}</h4>
                                <p className="mt-0">{facility[2].details}</p>
                            </div>
                        </div>
                        <div className=" w-full border-t-2 border-red-600 rounded-box">
                            <div className="card bg-base-300 rounded-box p-6 space-y-2">
                                <h4 className="text-2xl font-bold">{facility[3].name}</h4>
                                <p className="mt-0">{facility[3].details}</p>
                            </div>
                        </div>
                    </div>
                    <p className="text-wrap">{description}</p>
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold ">3 Simple Steps to Process</h2>
                        <p className="text-wrap">{description}</p>
                        <div className="pt-6 pb-6 md:flex justify-between ">
                            <div className="card card-compact w-48 bg-base-100 shadow-xl">
                                <div className="card-body items-center text-center">
                                    <h2 className="bg-red-500 p-4 rounded-full text-xl shadow-xl font-bold text-white">01</h2>
                                    <h2 className="card-title text-xl font-bold text-black">STEP ONE</h2>
                                    <p>It uses a dictionary of over 200 .</p>
                                </div>
                            </div>
                            <div className="card card-compact w-48 bg-base-100 shadow-xl">
                                <div className="card-body items-center text-center">
                                    <h2 className="bg-red-500 p-4 rounded-full text-xl shadow-xl font-bold text-white">02</h2>
                                    <h2 className="card-title text-xl font-bold text-black">STEP TWO</h2>
                                    <p>It uses a dictionary of over 200 .</p>
                                </div>
                            </div>
                            <div className="card card-compact w-48 bg-base-100 shadow-xl">
                                <div className="card-body items-center text-center">
                                    <h2 className="bg-red-500 p-4 rounded-full text-xl shadow-xl font-bold text-white">03</h2>
                                    <h2 className="card-title text-xl font-bold text-black">STEP THREE</h2>
                                    <p>It uses a dictionary of over 200 .</p>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <img className="rounded-lg w-full h-96" src={img} alt="" />
                        </div>
                    </div>
                </div>
                <div className="space-y-8">
                    <div>
                        <DetailsRightNav></DetailsRightNav>
                    </div>
                    <div className="card w-96 bg-black shadow-lg">
                        <div className="card-body space-y-2">
                            <h2 className="card-title text-3xl font-bold text-white mb-2">Download</h2>
                            <div className="flex items-center justify-between">
                                <div className="text-white flex items-center gap-2">
                                    <h2 className="text-4xl font-bold text-white"><FaFileDownload></FaFileDownload></h2>
                                    <div>
                                        <h4 className=" font-bold ">Our Brochure</h4>
                                        <span className="text-gray-500">Download</span>
                                    </div>
                                </div>
                                <Link className="btn bg-orange-500 text-white font-bold text-2xl border-none hover:text-black mr-6"><FaArrowRight ></FaArrowRight></Link>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="text-white flex items-center gap-2">
                                    <h2 className="text-4xl font-bold text-white"><FaFileDownload></FaFileDownload></h2>
                                    <div>
                                        <h4 className=" font-bold ">Company Details
                                        </h4>
                                        <span className="text-gray-500">Download</span>
                                    </div>
                                </div>
                                <Link className="btn bg-orange-500 text-white font-bold text-2xl border-none mr-6 hover:text-black"><FaArrowRight></FaArrowRight></Link>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 bg-black text-white shadow-lg">
                        <figure className="px-10 pt-10">
                            <img src={logo} alt="Shoes" className="rounded-lg" />
                        </figure>
                        <div className="card-body items-center text-center mb-6">
                            <h2 className="card-title">Need Help? We Are Here <br /> To Help You</h2>
                            <div className="bg-base-100 rounded-lg">
                                <div className="p-8">
                                    <h2 className="font-bold text-orange-500 text-xl">Car Doctor <span className="text-black">Special</span></h2>
                                    <p className="text-gray-500 font-bold">Save up to <span className="text-orange-500">60% off</span></p>
                                </div>
                            </div>
                            <button className="btn bg-orange-500 border-none absolute rounded-lg shadow-2xl top-80 text-white font-bold hover:text-black">Get A Quote</button>
                        </div>

                    </div>
                    <p className="text-4xl font-bold text-black">Price: ${price}</p>
                    <Link to={`/checkout/${_id}`}><button className="btn bg-orange-500 w-96 text-white hover:text-black font-bold mt-6">Proceed Checkout</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;