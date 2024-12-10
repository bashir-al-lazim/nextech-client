import { useState } from "react";
import ProductCard from "../components/shared/ProductCard";
import useLoadProducts from "../hooks/useLoadProducts";
import Pagination from "../components/unique/Pagination";
import toast from "react-hot-toast";

const Products = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState({ addLink: '?type=trending' })

    const { products, refetch } = useLoadProducts(search)

    const lastPostIndex = currentPage * 6;
    const firstPostIndex = lastPostIndex - 6;
    const currentProducts = products.slice(firstPostIndex, lastPostIndex);

    const handleSearch = e => {
        e.preventDefault()
        const keyword = e.target.search.value

        if (keyword){
            setSearch({ addLink: `/search?keyword=${keyword}` })
        }
        else{
            toast.error('Type a keyword please')
        }
        
    }

    const handleReset = () => {
        setSearch({ addLink: '?type=trending' })
    }

    return (
        <div className="w-[80%] pt-28 pb-14 mx-auto">
            <h2 className="text-5xl pb-10 md:pb-14 font-bold">Have a Look on All Listed <span className="text-yellow-400">Products</span></h2>
            <form onSubmit={handleSearch} onReset={handleReset} className="form-control flex flex-row items-center gap-4 mb-10">
                <input type="text" name="search" placeholder="Search by keyword" className="input input-bordered w-60 border-[0.125rem] border-yellow-400" />
                <input type="submit" value={'Find'} className="btn hover:btn-warning border-[0.125rem] border-yellow-400 text-lg text-yellow-400 bg-base-100" />
                <input type="reset" value={'Reset'} className="btn hover:btn-error border-[0.125rem] border-red-400 text-lg text-red-400 bg-base-100" />
            </form>
            <div className="gap-6 grid md:grid-cols-2 lg:grid-cols-3 justify-center items-baseline">
                {
                    currentProducts.map((product, _id) => <ProductCard key={_id} product={product} refetch={refetch} allProd={true} />)
                }
            </div>
            <Pagination
                totalPosts={products.length}
                postsPerPage={6}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
        </div>
    );
};

export default Products;