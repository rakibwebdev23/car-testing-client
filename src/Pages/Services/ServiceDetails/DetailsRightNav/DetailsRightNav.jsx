import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const DetailsRightNav = () => {

    const [details, setDetails] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setDetails(data))
    },[])

    return (
        <div className="card w-96 bg-base-100 shadow-lg">
            <div className="card-body">
                <h2 className="card-title text-3xl font-bold">Services</h2>
                <div className="">
                    {
                        details.map(detail => <li className="list-none py-2" key={detail._id}><Link className="btn btn-outline btn-warning w-full text-left">{detail.title}</Link></li> )
                    }
                </div>
            </div>
        </div>
    );
};

export default DetailsRightNav;