import { useParams } from "react-router-dom";
import ProductCard from "../components/shared/ProductCard";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Reviews from "../components/unique/Reviews";

const ProductDetails = () => {

    const { id } = useParams()
    const axiosSecure = useAxiosSecure()

    const { refetch, data: product = {} } = useQuery({
        queryKey: ['products', id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/products?id=${id}`)
            return res.data
        }
    })
    return (
        <div className="pt-10">
            <ProductCard product={product} refetch={refetch} dLoad={true} />
            <Reviews id={id} />
        </div>
    );
};

export default ProductDetails;