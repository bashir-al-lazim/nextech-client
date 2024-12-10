import PropTypes from 'prop-types';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import useAxiosSecure from '../../hooks/useAxiosSecure';


const ProductCard = ({ product, gradient = '', refetch, dLoad = false, allProd = false }) => {

    const { name, adder, logo, shortDescription, description, tags = [], upVote, upVoters = [], _id } = product
    const { theme, user } = useContext(AuthContext)
    const navigate = useNavigate()
    let [status, setStatus] = useState(false)
    const axiosSecure = useAxiosSecure()

    useEffect(() => {
        if (user) {
            let flag = upVoters.filter(email => email === user.email).length
            if (user.email === adder) { setStatus(true) }
            else if (flag) { setStatus(true) }
            else { setStatus(false) }
        }
        else {
            setStatus(false)
        }
    }, [user, product])

    const handleUpVote = () => {
        if (user) {
            if (status) {
                user.email === adder ? toast.error('Product adder is not eligible to vote') : toast.error('You have already voted')
            }
            else {
                upVoters.push(user.email)
                axiosSecure.patch(`/products/${_id}`, { upVote: upVote + 1, upVoters: upVoters })
                    .then(res => {
                        if (res.data.modifiedCount) {
                            toast.success('Voted Successfully')
                            refetch()
                        }
                        else {
                            toast.error('Vote count Failed')
                        }
                    })
            }
        }
        else {
            toast.error('Login to vote.')
            navigate('/login')
        }
    }

    return (
        <>
            {
                allProd || <div className={dLoad ? 'grid pt-16 w-[80%] mx-auto justify-center' : `flex gap-10 justify-between items-center hover:bg-gradient-to-b from-transparent ${gradient} py-3 rounded-lg`}>
                    <div className={'flex items-center'}>
                        <div className={"pt-1 self-start"}>
                            <img src={logo} alt="logo" className={dLoad ? 'w-24 rounded-xl' : 'w-12 h-12 rounded-xl min-w-max'} />
                        </div>
                        <div className='ml-8'>
                            <h3 className='mb-2'><Link to={`/products/${_id}`} className="font-bold font-sans text-lg">{name}</Link><span className="w-9"> — </span>{shortDescription}</h3>
                            <ul className="flex flex-wrap gap-4">
                                {
                                    tags.map((tag, idx) => <li key={idx} className={`${theme === 'dark' ? 'text-white' : 'text-black'} rounded-full bg-base-300 px-3`}>{tag}</li>)
                                }
                            </ul>
                        </div>
                        {
                            dLoad && <>
                                <div className='mx-8 flex'>
                                    <button onClick={handleUpVote} className={`${status ? 'bg-gray-400' : 'bg-green-100'} flex flex-col-reverse min-w-max items-center py-1 px-6 mr-4 rounded-3xl`}>
                                        <img src='/images/upVote.svg' alt="upvote" className="w-8 h-8" />
                                        <p className='text-black'>{upVote}</p>
                                    </button>
                                    <button className='bg-red-300 text-red-600 font-bold rounded-3xl p-4'>Report</button>
                                </div>
                            </>
                        }
                    </div>
                    {
                        dLoad && <>
                            <div className='divider divider-warning'></div>
                            <p>{description}</p>
                            <div className='divider divider-warning'></div>
                        </>
                    }
                    {dLoad || <div className='self-start'>
                        <button onClick={handleUpVote} className={`${status ? 'bg-gray-400' : 'bg-green-100'} flex flex-col-reverse min-w-max items-center py-1 px-3 mr-4 rounded-full`}>
                            <img src='/images/upVote.svg' alt="upvote" className="w-8 h-8" />
                            <p className='text-black'>{upVote}</p>
                        </button>
                    </div>}
                </div>
            }
            {
                allProd &&
                <div className='flex flex-col justify-between gap-6 border-[0.125rem]  w-64 h-full rounded-xl p-3 shadow-lg shadow-yellow-400'>
                    <div className='flex items-start gap-4'>
                        <div>
                            <img src={logo} alt="logo" className={dLoad ? 'w-24 rounded-xl' : 'w-12 h-12 rounded-xl min-w-max'} />
                        </div>
                        <div className='flex-1'>
                            <h3 className='mb-2'><Link to={`/products/${_id}`} className="font-bold font-sans text-lg">{name}</Link><span className="w-9"> — </span>{shortDescription}</h3>
                            <ul className="flex flex-wrap gap-4">
                                {
                                    tags.map((tag, idx) => <li key={idx} className={`${theme === 'dark' ? 'text-white' : 'text-black'} rounded-xl bg-base-300 p-2`}>{tag}</li>)
                                }
                            </ul>
                        </div>
                    </div>
                    <div className='self-end'>
                        <button onClick={handleUpVote} className={`${status ? 'bg-gray-400' : 'bg-green-100'} flex flex-col-reverse min-w-max items-center px-6 rounded-xl`}>
                            <img src='/images/upVote.svg' alt="upvote" className="w-8 h-8" />
                            <p className='text-black'>{upVote}</p>
                        </button>
                    </div>
                </div>
            }
        </>
    );
};

export default ProductCard;

ProductCard.propTypes = {
    product: PropTypes.object,
    gradient: PropTypes.string,
    refetch: PropTypes.func,
    dLoad: PropTypes.bool,
    allProd: PropTypes.bool,
}