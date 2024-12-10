import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const Profile = () => {

    const { user, loading } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    const token = localStorage.getItem('accessToken');
    const headers = {
        Authorization: `Bearer ${token}`,
    };

    const { refetch, data = {} } = useQuery({
        queryKey: ['users', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/${user.email}`, { headers })
            return res.data
        }
    })

    const handleStatus = () => {
        const body = { status: 'varified' }
        axiosSecure.patch(`/users/${user.email}`, body, { headers })
            .then(res => {
                console.log(res.data)
                if (!res.data.modifiedCount) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Subscription successful",
                        showConfirmButton: false,
                        timer: 1500
                      });
                    refetch()
                }
                else {
                    Swal.fire({
                        position: "center",
                        icon: "error",
                        title: "Subscription failed",
                        showConfirmButton: false,
                        timer: 1500
                      });
                }

            })
    }

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
            {
                data?.status === 'varified' ?
                    <div className="px-10 pt-5">
                        <p className="mt-4 font-medium text-xl mb-3">Subscription Status : {data?.status}</p>
                    </div>
                    :
                    <div className="px-10 pt-5">
                        <p className="mt-4 font-medium text-xl mb-3">Subscribe Now <span className="text-2xl">→</span> </p>
                        <div onClick={handleStatus} className='flex'>
                            <Link className="relative inline-flex items-center justify-center px-5 py-2 overflow-hidden font-medium bg-yellow-400 text-white hover:text-yellow-400 rounded-lg group border-yellow-400 border-[0.1rem] min-w-max text-xl">
                                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-base-100 rounded-full group-hover:w-56 group-hover:h-56"></span>
                                <span className="relative">$99</span>
                            </Link>
                        </div>
                    </div>
            }
        </div>
    );
};

export default Profile;