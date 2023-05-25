import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'
const Featured = () => {
    return (
        <div className='featured-item bg-fixed  py-20 px-20 text-white'>
            <div className='bg-slate-500 bg-opacity-60'>
                <SectionTitle
                    subHeading={"---Check it out---"}
                    heading={"FROM OUR MENU"}
                ></SectionTitle>
                <div className='md:flex items-center'>
                    <div className='md:mr-5'>
                        <img src={featuredImg} alt="" />
                    </div>
                    <div className='space-y-2'>
                        <p>March 20, 2023</p>
                        <p>WHERE CAN I GET SOME?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button className="btn btn-outline border-0 border-b-4 text-white mt-2">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;