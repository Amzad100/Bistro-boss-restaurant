import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import cardimg1 from '../../../assets/home/slide1.jpg'
const ShefRecomends = () => {
    return (
        <>
            <SectionTitle
                subHeading={"---Should Try---"}
                heading={"CHEF RECOMMENDS"}
            ></SectionTitle>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-10'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="">
                        <img src={cardimg1} alt="Shoes" className="rounded-xl w-96 h-72" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <button className="btn btn-outline border-0 border-b-4 text-yellow-600 mt-2">Add To Cart</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="">
                        <img src={cardimg1} alt="Shoes" className="rounded-xl w-96 h-72" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <button className="btn btn-outline border-0 border-b-4 text-yellow-600 mt-2">Add To Cart</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="">
                        <img src={cardimg1} alt="Shoes" className="rounded-xl w-96 h-72" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <button className="btn btn-outline border-0 border-b-4 text-yellow-600 mt-2">Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShefRecomends;