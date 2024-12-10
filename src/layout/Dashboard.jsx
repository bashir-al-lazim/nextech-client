import { FaBook, FaCartPlus, FaHome, FaList, FaShoppingCart, FaUser, FaUsers, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    // const [cart] = useCart();
    // TODO: get isAdmin value from the database
    const [isAdmin] = ['']

    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-base-300 border-r-[0.125rem] border-r-yellow-600">
                <ul className="menu p-4">
                    {
                        isAdmin ? <>
                            <li>
                                <NavLink to="/dashboard/adminHome">
                                    <FaHome></FaHome>
                                    Admin Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/addItems">
                                    <FaUtensils></FaUtensils>
                                    Add Items</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageItems">
                                    <FaList></FaList>
                                    Manage Items</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/bookings">
                                    <FaBook></FaBook>
                                    Manage Bookings</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/users">
                                    <FaUsers></FaUsers>
                                    All Users</NavLink>
                            </li>
                        </>
                            :
                            <>
                                <li>
                                    <NavLink to="/dashboard/my-profile">
                                        <FaUser />
                                        My Profile</NavLink>
                                </li>
                                {/* <li>
                                    <NavLink to="/dashboard/cart">
                                        <FaShoppingCart></FaShoppingCart>
                                        My Cart ({cart.length})</NavLink>
                                </li> */}
                                <li>
                                    <NavLink to="/dashboard/add-products">
                                        <FaCartPlus />
                                        Add Product</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/my-products">
                                        <FaList></FaList>
                                        My Products</NavLink>
                                </li>
                            </>
                    }
                    {/* shared nav links */}
                    <div className="divider divider-warning"></div>
                    <li>
                        <NavLink to="/">
                            <FaHome></FaHome>
                            Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/products">
                            <FaShoppingCart />
                            Products</NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex flex-1 py-10 px-4 items-start">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;