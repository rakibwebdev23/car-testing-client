import img1 from "../../../assets/allImage/images/banner/1.jpg"
import img2 from "../../../assets/allImage/images/banner/2.jpg"
import img3 from "../../../assets/allImage/images/banner/3.jpg"
import img4 from "../../../assets/allImage/images/banner/4.jpg"
import img5 from "../../../assets/allImage/images/banner/5.jpg"
import img6 from "../../../assets/allImage/images/banner/6.jpg"

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img2} className="w-full rounded-lg" />
                <div className="absolute flex items-center bottom-0 top-0 pl-14 bg-gradient-to-r from-[#121212] to-[rgba(21,21,21,0)] rounded-lg">
                    <div className="space-y-6 text-white w-1/2">
                        <h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-warning text-white mr-6">Discover More</button>
                            <button className="btn btn-outline btn-warning">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end bottom-0 transform -translate-y-1/2 right-5 gap-6">
                    <a href="#slide6" className="btn btn-circle border-none hover:bg-orange-500 hover:text-white">❮</a>
                    <a href="#slide2" className="btn btn-circle hover:bg-orange-500 border-none hover:text-white">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img3} className="w-full rounded-lg" />
                <div className="absolute flex items-center bottom-0 top-0 pl-14 bg-gradient-to-r from-[#121212] to-[rgba(21,21,21,0)] rounded-lg">
                    <div className="space-y-6 text-white w-1/2">
                        <h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-warning text-white mr-6">Discover More</button>
                            <button className="btn btn-outline btn-warning">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end bottom-0 transform -translate-y-1/2 right-5 gap-6">
                    <a href="#slide1" className="btn btn-circle hover:bg-orange-500 border-none hover:text-white">❮</a>
                    <a href="#slide3" className="btn btn-circle hover:bg-orange-500 border-none hover:text-white">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img1} className="w-full rounded-lg" />
                <div className="absolute flex items-center bottom-0 top-0 pl-14 bg-gradient-to-r from-[#121212] to-[rgba(21,21,21,0)] rounded-lg">
                    <div className="space-y-6 text-white w-1/2">
                        <h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-warning text-white mr-6">Discover More</button>
                            <button className="btn btn-outline btn-warning">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end bottom-0 transform -translate-y-1/2 right-5 gap-6">
                    <a href="#slide2" className="btn btn-circle hover:bg-orange-500 border-none hover:text-white">❮</a>
                    <a href="#slide4" className="btn btn-circle hover:bg-orange-500 border-none hover:text-white">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full rounded-lg" />
                <div className="absolute flex items-center bottom-0 top-0 pl-14 bg-gradient-to-r from-[#121212] to-[rgba(21,21,21,0)] rounded-lg">
                    <div className="space-y-6 text-white w-1/2">
                        <h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-warning text-white mr-6">Discover More</button>
                            <button className="btn btn-outline btn-warning">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end bottom-0 transform -translate-y-1/2 right-5 gap-6">
                    <a href="#slide3" className="btn btn-circle hover:bg-orange-500 border-none hover:text-white">❮</a>
                    <a href="#slide5" className="btn btn-circle hover:bg-orange-500 border-none hover:text-white">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <img src={img5} className="w-full rounded-lg" />
                <div className="absolute flex items-center bottom-0 top-0 pl-14 bg-gradient-to-r from-[#121212] to-[rgba(21,21,21,0)] rounded-lg">
                    <div className="space-y-6 text-white w-1/2">
                        <h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-warning text-white mr-6">Discover More</button>
                            <button className="btn btn-outline btn-warning">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end bottom-0 transform -translate-y-1/2 right-5 gap-6">
                    <a href="#slide4" className="btn btn-circle hover:bg-orange-500 border-none hover:text-white">❮</a>
                    <a href="#slide6" className="btn btn-circle hover:bg-orange-500 border-none hover:text-white">❯</a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
                <img src={img6} className="w-full rounded-lg" />
                <div className="absolute rounded-lg flex items-center bottom-0 top-0 pl-14 bg-gradient-to-r from-[#121212] to-[rgba(21,21,21,0)]">
                    <div className="space-y-6 text-white w-1/2">
                        <h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-warning text-white mr-6">Discover More</button>
                            <button className="btn btn-outline btn-warning">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end bottom-0 transform -translate-y-1/2 right-5 gap-6 ">
                    <a href="#slide5" className="btn btn-circle hover:bg-orange-500 border-none hover:text-white">❮</a>
                    <a href="#slide1" className="btn btn-circle hover:bg-orange-500 border-none hover:text-white">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;