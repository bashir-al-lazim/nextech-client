import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useLoadReviews = (id) => {

    const axiosSecure = useAxiosSecure()

    const { refetch, data: reviews = []} = useQuery({
        queryKey: ['reviews', id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/reviews?id=${id}`)
            return res.data
        }
    })

    return { reviews, refetch }
};

export default useLoadReviews;