import { Link } from "react-router-dom";

const EstateCard = ({estate}) => {

    const {estate_title,image,price,area,status,id} = estate;

    return (
        <div className="space-y-1 p-4 shadow-lg rounded-xl">
            <img className="rounded-xl mb-4" src={image} alt="" />
            <div className="flex justify-between">
            <h3 className="text-2xl font-semibold">{estate_title}</h3>
            <p className="bg-green-600 flex items-center rounded-lg px-3 bg-center text-center text-white">{status}</p>
            </div>
            <p>Area: {area}</p>
            <p className=" text-xl font-bold"> Price: <span className="text-amber-600">{price}</span> </p>
            <p></p>
            <Link to={`/estate/${id}`}><button className="btn w-full bg-amber-600 text-white">View Property</button></Link>
        </div>
    );
};

export default EstateCard;