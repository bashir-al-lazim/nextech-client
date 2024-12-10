import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useLoadProducts = ({ addLink='' }) => {

    const axiosSecure = useAxiosSecure()

    const { refetch, data: products = []} = useQuery({
        queryKey: ['products', addLink],
        queryFn: async () => {
            const res = await axiosSecure.get(`/products${addLink}`)
            return res.data
        }
    })

    return { products, refetch }
};

export default useLoadProducts;