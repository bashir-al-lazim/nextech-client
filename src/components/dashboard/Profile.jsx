import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router-dom";

const Profile = () => {

    const { user, loading } = useContext(AuthContext)

    if (loading) {
        return <div className="hero min-h-screen"><span className="loading loading-bars loading-lg"></span></div>
    }

    return (
        <div className="grid w-[70%] bg-base-200 mx-auto rounded-3xl py-10 px-8 text-blac">
            <h1 className="text-4xl font-bold text-center">User Profile</h1>
            <div className="divider divider-neutral"></div>
            <div className="avatar justify-self-center my-4">
                <div className="mask mask-squircle w-24 bg-black">
                    <img src={user.photoURL} alt="user pic" className="text-white" />
                </div>
            </div>
            <div className="font-medium text-xl px-10 pt-5">
                <p>Name :  {user.displayName}</p>
                <p>Email :  {user.email}</p>
            </div>
            <div className="px-10 pt-5">
                <p className="mt-4 font-medium text-xl mb-3">Subscribe Now <span className="text-2xl">→</span> </p>
                <div className='flex'>
                    <Link className="relative inline-flex items-center justify-center px-5 py-2 overflow-hidden font-medium bg-yellow-400 text-white hover:text-yellow-400 rounded-lg group border-yellow-400 border-[0.1rem] min-w-max text-xl">
                        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-base-100 rounded-full group-hover:w-56 group-hover:h-56"></span>
                        <span className="relative">$99</span>
                    </Link>
                </div>
            </div>
            <div className="px-10 pt-5">
                <p className="mt-4 font-medium text-xl mb-3">Subscription Status : Varified</p>
            </div>
        </div>
    );
};

export default Profile;