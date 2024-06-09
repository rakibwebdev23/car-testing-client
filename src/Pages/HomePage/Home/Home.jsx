import About from "../../About/About";
import Services from "../../Services/Services";
import Banner from "../Banner/Banner";
import OfficeTime from "../OfficeTime/OfficeTime";
import OurProduct from "../OurProduct/OurProduct";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <OfficeTime></OfficeTime>
            <OurProduct></OurProduct>
        </div>
    );
};

export default Home;