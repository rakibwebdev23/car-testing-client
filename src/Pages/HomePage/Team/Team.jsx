import team1 from '../../../assets/allImage/images/team/1.jpg'
import team2 from '../../../assets/allImage/images/team/2.jpg'
import team3 from '../../../assets/allImage/images/team/3.jpg'
const Team = () => {
    return (
        <div className='mt-16'>
            <div className="text-center space-y-4 mt-4">
                <h1 className="text-2xl text-yellow-500 font-bold">Team</h1>
                <h4 className="text-4xl font-bold">Meet Our Team</h4>
                <p>The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={team1} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Car Engine Plug</h2>
                        <p>Engine expert</p>
                        <div className="card-actions">

                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={team2} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Car Engine Plug</h2>
                        <p>Engine expert</p>
                        <div className="card-actions">

                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={team3} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Car Engine Plug</h2>
                        <p>Engine expert</p>
                        <div className="card-actions">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;