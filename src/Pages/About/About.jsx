import person from "../../../src/assets/allImage/images/about_us/person.jpg";
import parts from "../../assets/allImage/images/about_us/parts.jpg";

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="lg:w-1/2 relative">
                    <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                    <img src={parts} className="w-1/2 right-5 top-1/2 absolute rounded-lg shadow-2xl border-solid border-8 border-white" />
                </div>
                <div className="lg:w-1/2 space-y-8 pl-6">
                    <h2 className="text-3xl font-bold text-yellow-500">About Us</h2>
                    <h1 className="text-5xl w-3/4 font-bold">We are qualified & of experience in this field</h1>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="btn btn-warning text-white hover:text-black hover:duration-300">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;