import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import EstateCard from "../Shared/EstateCard/EstateCard";
import { Helmet } from "react-helmet-async";


const Home = () => {
    const estates = useLoaderData();
    return (
        <div>
            <Helmet>
                <title>Home | Royal Residences</title>
            </Helmet>
            <Header></Header>
            <div>
                <div className="text-center my-8">
                    <h1 className="font-bodoni text-4xl font-semibold  mb-3">Featured Properties</h1>
                    <p>These handpicked gems, carefully curated by our team of experts, represent the pinnacle of real estate <br /> excellence in their respective locales. With unparalleled attention to detail, superior craftsmanship, and <br /> desirable amenities, each Featured Property embodies the epitome of luxury living.</p>
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
        </div>
    );
};

export default Home;