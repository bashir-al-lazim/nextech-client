import axios from "axios";
import { signOut } from "firebase/auth";
import toast from "react-hot-toast";
import auth from "../firebase/firebase.config";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
})

const useAxiosSecure = () => {

    const navigate = useNavigate()

    useEffect(() => {
        axiosSecure.interceptors.response.use(res => {
            return res;
        }, error => {
            if (error.response.status === 401 || error.response.status === 403) {
                toast.promise(setTimeout(() => signOut(auth), 2000),
                    {
                        loading: `${error.response.statusText}! logging out...`,
                        success: <b>Forced logout</b>,
                        error: <b>Could not logout</b>,
                    },
                )
                navigate('/login')
            }
        })
    }, [])

    return axiosSecure;
};

export default useAxiosSecure;