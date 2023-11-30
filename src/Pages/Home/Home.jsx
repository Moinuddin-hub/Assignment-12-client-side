
import AllStory from "../../Components/AllStory/AllStory";
import Footer from "../../Components/Footer/Footer";
import TourType from "../../Components/TourType/TourType";
import Banner from "../Banner/Banner";
import Section from "../Section/Section";


const Home = () => {
    return (
        <div>
          
             <Banner></Banner>
             <Section></Section>
             <TourType></TourType>
             <AllStory></AllStory>
             <Footer></Footer>
        </div>
    );
};

export default Home;