import About from "../../About/About";
import Services from "../../Services/Services";
import Banner from "../Banner/Banner";
import OfficeTime from "../OfficeTime/OfficeTime";
import OurProduct from "../OurProduct/OurProduct";
import Team from "../Team/Team";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <OfficeTime></OfficeTime>
            <OurProduct></OurProduct>
            <Team></Team>
        </div>
    );
};

export default Home;