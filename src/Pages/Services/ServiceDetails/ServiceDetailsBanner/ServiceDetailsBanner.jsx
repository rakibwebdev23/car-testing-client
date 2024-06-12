import img from "../../../../assets/allImage/images/services/4.jpg"

const ServiceDetailsBanner = () => {
    return (
        <div className="carousel w-full h-[300px] mb-16">
            <div className="carousel-item relative w-full">
                <img src={img} className="w-full rounded-lg" />
                <div className="absolute flex items-center bottom-0 top-0 pl-14 bg-gradient-to-r from-[#121212] to-[rgba(21,21,21,0)] rounded-lg">
                    <div className="space-y-6 text-white">
                        <h2 className="text-4xl font-bold">Service Details</h2>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ServiceDetailsBanner;