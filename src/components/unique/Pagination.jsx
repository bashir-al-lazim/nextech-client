import PropTypes from "prop-types";
import '../../styles/Pagination.css'

const Pagination = ({
    totalPosts,
    postsPerPage,
    setCurrentPage,
    currentPage,
}) => {
    let pages = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i);
    }

    return (
        <div className='pagination pt-12'>
            {pages.map((page, index) => {
                return (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(page)}
                        className={page == currentPage ? "active" : "border-[0.125rem]"}>
                        {page}
                    </button>
                );
            })}
        </div>
    );
};

export default Pagination;

Pagination.propTypes = {
    totalPosts: PropTypes.number,
    postsPerPage: PropTypes.number,
    setCurrentPage: PropTypes.func,
    currentPage: PropTypes.number,
}