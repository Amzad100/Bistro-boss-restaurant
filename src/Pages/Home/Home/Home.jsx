import PopulerMenu from "../../PopularMenu/PopulerMenu";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import Testimonals from "../Testimonals/Testimonals";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='max-w-7xl mx-auto'>
                <Category></Category>
                <PopulerMenu></PopulerMenu>
                <Featured></Featured>
                <Testimonals></Testimonals>
            </div>

        </div>
    );
};

export default Home;