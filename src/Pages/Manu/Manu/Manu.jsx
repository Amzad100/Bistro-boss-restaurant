import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import coverimg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import ManuCategory from "../ManuCategory/ManuCategory";

const Manu = () => {
    const [menu] = useMenu();
    const offered = menu.filter(item => item.category === 'offered')
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Manu</title>
            </Helmet>
            {/* Main cover */}
            <Cover img={coverimg} title={"OUR MENU"}></Cover>
            <div className="max-w-7xl mx-auto">
                {/* Offered section  */}
                <SectionTitle subHeading={"---Don't miss---"} heading={"TODAY'S OFFER"}></SectionTitle>
                <ManuCategory items={offered}></ManuCategory>
                <ManuCategory items={dessert} title={"dessert"} img={dessertImg}></ManuCategory>
                <ManuCategory items={pizza} title={"pizza"} img={pizzaImg}></ManuCategory>
                <ManuCategory items={salad} title={"salad"} img={saladImg}></ManuCategory>
                <ManuCategory items={soup} title={"soup"} img={soupImg}></ManuCategory>
            </div>

        </div>
    );
};

export default Manu;