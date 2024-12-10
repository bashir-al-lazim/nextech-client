import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import PropTypes from "prop-types";

const PostReview = ({ id: productId, refetch }) => {

    const { user } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()

    const handlePostReview = e => {
        e.preventDefault()
        const description = e.target.description.value
        const rating = Number(e.target.rating.value)

        const review = { productId, name: user.displayName, image: user.photoURL, description, rating }

        axiosSecure.post('/reviews', review)
            .then(res => {
                if (res.data.insertedId) {
                    toast.success('Review added successfully')
                    refetch()
                }
                else {
                    toast.error('Review add Failed')
                }
            })
    }
    return (
        <form onSubmit={handlePostReview} className="mt-14 space-y-8 mx-auto">
            <p className="text-3xl font-semibold text-yellow-500">Would you like to add your insights?</p>
            <div>
                <div className="relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-yellow-400 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-500">
                    <input type="text" placeholder="Your name" value={user?.displayName} readOnly name='name' className="w-full bg-transparent pb-3  border-b border-gray-500 outline-none invalid:border-red-400 transition" required />
                </div>
            </div>
            <div>
                <div className="relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-yellow-400 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-500">
                    <input type="url" placeholder="Your photo url" value={user?.photoURL} readOnly name='image' className="w-full bg-transparent pb-3  border-b border-gray-500 outline-none invalid:border-red-400 transition" required />
                </div>
            </div>
            <div>
                <div className="relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-yellow-400 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-500">
                    <input type="text" placeholder="Your insights" name='description' className="w-full bg-transparent pb-3  border-b border-gray-500 outline-none invalid:border-red-400 transition" required />
                </div>
            </div>
            <div>
                <div className="relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-yellow-400 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-500">
                    <input type="number" placeholder="Rating (integer number only)" name='rating' className="w-full bg-transparent pb-3  border-b border-gray-500 outline-none invalid:border-red-400 transition" required />
                </div>
            </div>
            <div>
                <button type="submit"
                    className="w-full rounded-full bg-yellow-400 h-11 flex items-center justify-center px-6 py-3 hover:bg-yellow-600 active:bg-yellow-700 transition-colors duration-500"
                >
                    <span className="text-base font-semibold text-white">Add My Insights</span>
                </button>
            </div>
        </form>
    );
};

export default PostReview;

PostReview.propTypes = {
    id: PropTypes.string,
    refetch: PropTypes.func,
}