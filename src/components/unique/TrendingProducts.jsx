/* eslint-disable react/no-unescaped-entities */
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import ProductCard from '../shared/ProductCard';
import useLoadProducts from '../../hooks/useLoadProducts';
import { Link } from 'react-router-dom';

const TrendingProducts = () => {

    const { theme } = useContext(AuthContext)
    const { products, refetch } = useLoadProducts({ addLink: '?type=trending' })

    return (
        <div className="relative">
            <img
                src="https://i.ibb.co/ZGyZvJW/trending-tech-transformed.jpg"
                className="absolute inset-0 object-cover object-left-top w-full h-full"
                alt=""
            />
            <div className="relative bg-opacity-30 bg-gray-700">
                <svg
                    className={`absolute inset-x-0 -top-2 rotate-180 text-white ${theme === 'dark' ? 'fill-black' : 'fill-white'}`}
                    viewBox="0 0 1160 163"
                >
                    <path
                        d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
                    />
                </svg>
                <svg
                    className={`absolute inset-x-0 -bottom-1 text-white ${theme === 'dark' ? 'fill-black' : 'fill-white'}`}
                    viewBox="0 0 1160 163"
                >
                    <path
                        d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
                    />
                </svg>
                <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-28 lg:py-20 text-white">
                    <div className="flex gap-6 flex-col-reverse md:flex-row items-center pt-16">
                        <h2 className="text-5xl mb-10 md:mb-0 md:w-8/12 font-bold">What's Hot ? 🔥 Trending Products </h2>
                        <img src="https://i.ibb.co/1LXHD6M/output-onlinegiftools-1.gif" alt="feature robo" className={`md:w-4/12`} />
                    </div>
                    <div className="space-y-6">
                        {
                            products.slice(0, 6).map((product, _id) => <ProductCard key={_id} gradient={'to-orange-500'} product={product} refetch={refetch} />)
                        }
                    </div>
                    <div className='flex mt-12'>
                        <Link to='/products' className="relative inline-flex items-center justify-center px-5 py-2 overflow-hidden font-medium bg-yellow-400 text-white hover:text-yellow-400 rounded-lg group border-yellow-400 border-[0.1rem] min-w-max">
                            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-base-100 rounded-full group-hover:w-56 group-hover:h-56"></span>
                            <span className="relative">Show All Products</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrendingProducts;