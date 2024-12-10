import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import PropTypes from "prop-types";
import useLoadReviews from "../../hooks/useLoadReviews";
import PostReview from "./PostReview";

const Reviews = ({ id }) => {

    const { reviews, refetch } = useLoadReviews(id)

    return (
        <section className="px-32 mb-16 mt-12">
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide key={review._id} className="px-16 flex flex-col items-center text-center">
                        <div className="rating rating-lg">
                            <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" defaultChecked={review.rating === 1 ? true : false} />
                            <input
                                type="radio"
                                name="rating-8"
                                className="mask mask-star-2 bg-orange-400"
                                defaultChecked={review.rating === 2 ? true : false} />
                            <input  type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" defaultChecked={review.rating === 3 ? true : false} />
                            <input  type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" defaultChecked={review.rating === 4 ? true : false} />
                            <input  type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" defaultChecked={review.rating === 5 ? true : false} />
                        </div>
                        <div>
                            <div className="avatar mx-auto my-8">
                                <div className="w-24 rounded-full">
                                    <img src={review.image} />
                                </div>
                            </div>
                            <p className="text-xl">{review.description}</p>
                            <h3 className="uppercase text-yellow-400 text-[2rem] mt-2 font-medium">{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
            <div className='divider divider-warning mt-14'></div>
            <PostReview id={id} refetch={refetch} />
        </section>
    );
};

export default Reviews;

Reviews.propTypes = {
    id: PropTypes.string,
}