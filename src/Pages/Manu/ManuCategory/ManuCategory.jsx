import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MemuItem/MenuItem";

const ManuCategory = ({ items, img, title }) => {
    return (
        <div >
            {title && <Cover img={img} title={title}></Cover>}
            <div className="grid md:grid-cols-2 gap-10 my-10">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="text-center my-10">
                <Link to={`/order/${title}`}><button className="btn btn-outline border-0 border-b-4  mt-2">ORDER YOUR FAVOURITE FOOD</button></Link>
            </div>
        </div>
    );
};

export default ManuCategory;