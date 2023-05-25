
const MenuItem = ({ item }) => {
    const { name, image, recipe, price, } = item;
    return (
        <div className="flex space-x-2">
            <img style={{ borderRadius: '0 200px 200px 200px' }} className="w-[100px]" src={image} alt="" />
            <div>
                <h1 className="text-xl ">{name}---------------</h1>
                <p>{recipe}</p>
            </div>
            <div>
                <p className="text-yellow-500">${price}</p>
            </div>

        </div>
    );
};

export default MenuItem;