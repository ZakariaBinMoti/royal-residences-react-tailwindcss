import { useLoaderData } from "react-router-dom";
import EstateCard from "../Shared/EstateCard/EstateCard";
import { Helmet } from "react-helmet-async";


const AllProperties = () => {
    const estates = useLoaderData();

    return (
        <div>
            <Helmet>
                <title>All Properties | Royal Residences</title>
            </Helmet>
                <div className="text-center my-8">
                    <h1 className="font-bodoni text-4xl font-semibold  mb-3">All Properties</h1>
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {
                        estates.map(estate => <EstateCard 
                            key={estate.id}
                            estate={estate}
                        ></EstateCard>)
                    }
                </div>
            </div>
    );
};

export default AllProperties;