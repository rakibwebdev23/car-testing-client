import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard/ServicesCard";

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <div className="text-center space-y-4 mt-4">
                <h1 className="text-2xl text-yellow-500 font-bold">Services</h1>
                <h4 className="text-4xl font-bold">Our Services Area</h4>
                <p>The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    services.map(service => <ServicesCard key={service._id}
                    service = {service}
                    >
                    </ServicesCard>)
                }
            </div>
            <div className="text-center mt-6">
                <button className="btn btn-outline btn-warning">More Services</button>
            </div>
        </div>
    );
};

export default Services;