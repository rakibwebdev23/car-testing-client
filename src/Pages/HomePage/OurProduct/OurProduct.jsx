import img1 from '../../../assets/allImage/images/products/1.png'
import img2 from '../../../assets/allImage/images/products/2.png'
import img3 from '../../../assets/allImage/images/products/3.png'
import img4 from '../../../assets/allImage/images/products/4.png'
import img5 from '../../../assets/allImage/images/products/5.png'
import img6 from '../../../assets/allImage/images/products/6.png'

const OurProduct = () => {
    return (
        <div>
            <div className="text-center space-y-4 mt-14">
                <h1 className="text-2xl text-yellow-500 font-bold">Popular Products</h1>
                <h4 className="text-4xl font-bold">Browse Our Products</h4>
                <p>The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable.  </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 gap-4'>
                <div className="card w-80 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img1} alt="Shoes" className="rounded-xl w-full" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Car Engine Plug</h2>
                        <p className='font-bold text-red-600'>$20.00</p>
                    </div>
                </div>
                <div className="card w-80 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img2} alt="Shoes" className="rounded-xl w-full" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Car Air Filter</h2>
                        <p className='font-bold text-red-600'>$25.00</p>
                        
                    </div>
                </div>
                <div className="card w-80 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img3} alt="Shoes" className="rounded-xl w-full h-full" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Cools Led Light</h2>
                        <p className='font-bold text-red-600'>$50.00</p>
                        
                    </div>
                </div>
                <div className="card w-80 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img4} alt="Shoes" className="rounded-xl w-full" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Cools Led Light</h2>
                        <p className='font-bold text-red-600'>$30.00</p>
                        
                    </div>
                </div>
                <div className="card w-80 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img5} alt="Shoes" className="rounded-xl w-full" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Cools Led Light</h2>
                        <p className='font-bold text-red-600'>$55.00</p>
                        
                    </div>
                </div>
                <div className="card w-80 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img6} alt="Shoes" className="rounded-xl w-full" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Cools Led Light</h2>
                        <p className='font-bold text-red-600'>$70.00</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurProduct;