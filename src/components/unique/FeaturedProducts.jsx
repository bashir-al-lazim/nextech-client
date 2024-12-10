/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";
import ProductCard from "../shared/ProductCard";
import { AuthContext } from "../../provider/AuthProvider";
import useLoadProducts from "../../hooks/useLoadProducts";

const FeaturedProducts = () => {

    const { theme } = useContext(AuthContext)
    const { products, refetch } = useLoadProducts({ addLink: '?type=featured' })

    return (
        <div className={`px-4 md:px-24 lg:px-28 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl ${theme === 'dark' ? 'text-white' : 'text-black'} pt-12`}>
            <div className="flex gap-6 flex-col-reverse md:flex-row-reverse items-center">
                <h2 className="text-5xl mb-10 md:mb-0 md:w-3/4 font-bold">Featuring: Tech's Next Wave</h2>
                <img src="https://i.ibb.co/tHs1LNf/feature-robo.gif" alt="feature robo" className={`md:w-1/4`} />
            </div>
            <div className="space-y-6">
                {
                    products.slice(0, 4).map((product, _id) => <ProductCard key={_id} gradient={'to-[#fddf477e]'} product={product} refetch={refetch} />)
                }
            </div>
        </div>
    );
};

export default FeaturedProducts;