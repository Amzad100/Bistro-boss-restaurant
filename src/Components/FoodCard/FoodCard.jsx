
const FoodCard = ({ item }) => {
    const { name, image, recipe, price, } = item;
    return (
        <div className="card w-96 bg-base-100 shadow-xl text-center">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="bg-slate-800 text-white absolute right-0 top-0 mr-5 mt-5 p-2">${price}</p>
            <div className="card-body items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button className="btn btn-outline bg-slate-100 border-0 border-b-4  mt-2 text-yellow-500">add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;