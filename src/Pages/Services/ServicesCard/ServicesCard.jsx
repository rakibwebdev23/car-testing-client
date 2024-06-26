import { Link } from "react-router-dom";
import { FaArrowRight } from 'react-icons/fa';

const ServicesCard = ({ service }) => {

    const {_id, img, title, price } = service;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="flex justify-between text-yellow-500 font-semibold">
                    <p>Price: ${price}</p>
                    <Link to={`/details/${_id}`}><button><FaArrowRight></FaArrowRight></button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;