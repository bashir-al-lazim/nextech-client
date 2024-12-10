import { useContext } from "react";
import Banner from "../components/unique/Banner";
import FeaturedProducts from "../components/unique/FeaturedProducts";
import { AuthContext } from "../provider/AuthProvider";
import TrendingProducts from "../components/unique/TrendingProducts";


const Home = () => {

    const { theme } = useContext(AuthContext)


    return (
        <div className={`${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
            <Banner />
            <FeaturedProducts />
            <TrendingProducts />
        </div>
    );
};

export default Home;