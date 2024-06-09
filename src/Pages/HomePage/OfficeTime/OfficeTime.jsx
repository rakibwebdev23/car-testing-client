// import { FaArrowRight, FaCalendarDays } from 'react-icons/fa';
import { BsTelephoneInbound } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';
import { FaCalendarDays } from 'react-icons/fa6';

const OfficeTime = () => {
    return (
        <div className=' bg-slate-950 rounded-lg mt-6'>
            <div className='grid grid-cols-1 md:grid-cols-3 items-center h-[250px]  pl-28 text-white'>
                <div className='flex items-center gap-2'>
                    <p className='text-4xl'><FaCalendarDays></FaCalendarDays></p>
                    <div>
                        <p>We are open monday-friday</p>
                        <h2 className="text-2xl font-bold">7:00 am - 9:00 pm</h2>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <p className='text-4xl'><BsTelephoneInbound></BsTelephoneInbound></p>
                    <div>
                        <p>Have a question?</p>
                        <h2 className="text-2xl font-bold">+8801307236959</h2>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <p className='text-4xl'><CiLocationOn></CiLocationOn></p>
                    <div>
                        <p>Need a repair? our address</p>
                        <h2 className="text-2xl font-bold">Dhaka, Bangladesh</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OfficeTime;