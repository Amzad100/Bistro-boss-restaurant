import { Helmet } from "react-helmet-async";
import PopulerMenu from "../../PopularMenu/PopulerMenu";
import Banner from "../Banner/Banner";
import BannerSecond from "../Banner/BannerSecond";
import BannerThird from "../Banner/BannerThird";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import ShefRecomends from "../ShefRecomends/ShefRecomends";
import Testimonals from "../Testimonals/Testimonals";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <div className='max-w-7xl mx-auto'>
                <Category></Category>
                <BannerSecond></BannerSecond>
                <PopulerMenu></PopulerMenu>
                <BannerThird></BannerThird>
                <ShefRecomends></ShefRecomends>
                <Featured></Featured>
                <Testimonals></Testimonals>
            </div>

        </div>
    );
};

export default Home;