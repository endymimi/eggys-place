import React, { useContext, useState } from "react";
import navLogo from "../assets/nav-logo.svg";
import locationImg from "../assets/location-img.svg";
import { Link, Outlet } from "react-router-dom";
import cartLogo from "../assets/cart-img.svg";
import loginLogo from "../assets/login-img.svg";
import { LocationDropDownFN } from "../utils/DropDown";
import AuthModal from "../components/modals/AuthModal";
import SearchField from "../components/SearchField";
import searchLogo from "../assets/search-logo.svg";
import CartContext from "../context/CartContext";
import helloIcon from "../assets/helloIcon.svg";
import dashboard from "../assets/dashboardIcon.png";
import orderIcon from "../assets/orderIcon.svg";
import inbox from "../assets/inboxx.svg";
import dropdown from "../assets/drop-down-img.svg";
import logOut from "../assets/logoutIcon.svg";
import Order from "../pages/Order";
import { useAuth } from "../context/AuthContext";
import checkIcon from "../assets/checkIcon.svg";

const Navbar = () => {
  const [isLoggedIn, setIsloggedIn] = useState(false);
  const { user, logout } = useAuth();
  const [isTrue, setIsTrue] = useState(false);
  const { cart } = useContext(CartContext);
  const savedLocation = localStorage.getItem("userLocation");
  // console.log(cart);

  // const [isOpen,setIsOpen] = useState()
  function toggleSearch() {
    isTrue ? setIsTrue(false) : setIsTrue(true);
  }
  return (
    <>
      <header className="bg-[#100101] w-full sticky z-10 top-0">
        <nav className="wrapper gap-4 lg:gap-8 xl:gap-12 flex justify-between items-center">
          {/* <div className="flex items-center gap-4 lg:gap-6">
            <div className="">

            <img src={navLogo} alt="nav-logo" className="w-10 md:w-full h-auto" />
            </div>

            <div>

            <img
              src={locationImg}
              alt="location-logo"
              className="w-5 md:w-full h-auto"
            />
            </div>
            <h4 className="text-[#F0F0F0] text-[20px] font-[500] hidden md:block ">Location</h4>
            <div>

              <LocationDropDownFN/>
            </div>
          </div> */}
          <div className="flex items-center gap-4 lg:gap-6">
            <Link to="/">
              <img
                src={navLogo}
                alt="nav-logo"
                className="w-10 md:w-full h-auto"
              />
            </Link>
            <div onClick={toggleSearch} className="lg:hidden">
              <img
                src={searchLogo}
                alt="search logo"
                className="w-7 md:w-14 cursor-pointer"
              />
            </div>
            <div className="lg:flex items-center gap-3 lg:gap-5 md:me-1 hidden ">
              <img
                src={locationImg}
                alt="location-logo"
                className="w-5 md:w-full h-auto"
              />
              <h4 className="text-[#F0F0F0] text-lg font-medium hidden md:block">
                {savedLocation ? savedLocation : "Location"}
              </h4>
            </div>
            <div className="hidden lg:block">
              <LocationDropDownFN />
            </div>
          </div>

          <div className="hidden lg:flex w-[399px] xl:w-[450px] 2xl:w-[500px] ml-4">
            <SearchField />
          </div>

          <div className="flex gap-4 lg:gap-6 xl:gap-8 items-center">
            {/* <h2 className="font-medium text-lg text-[#FBFBFB] hidden lg:block whitespace-nowrap">All Products</h2> */}
            <ul className="flex gap-4 lg:gap-6 items-center">
              <li className="flex items-center justify-center w-[76px] h-[50px] md:w-[142px] lg:h-[56px] py-[15px]  lg:px-[20px]  bg-[#B67B0F] rounded-[100px] lg:rounded-[32px]">
                <Link className="flex items-center justify-center" to="/cart">
                  <img src={cartLogo} alt="cart-logo" />{" "}
                  <span className="ps-2 text-[#FBFBFB] font-[500] text-[20px]">
                    {" "}
                    <span className="hidden md:inline-block">Cart</span>{" "}
                    {cart.length}{" "}
                  </span>
                </Link>
              </li>
              <li className="">
                {user ? (
                  <div className="text-white">
                    <div className="dropdown dropdown-down dropdown-center">
                      <div
                        tabIndex={0}
                        role="button"
                        className="text-white m-1 flex my-3 cursor-pointer"
                      >
                        {" "}
                        <img src={helloIcon} alt="" />
                        Hi, {user.firstName}
                        <img src={dropdown} alt="" />
                      </div>
                      <ul
                        tabIndex={0}
                        className="dropdown-content menu bg-black rounded-box z-1 w-52 p-2 shadow-sm"
                      >{user.role === "admin" &&(
                        
                        <li className="text-white hover:bg-[#B67B0F]   cursor-pointer">
                        <a>
                          {" "}
                      <Link to="/dashboard">    <img src={dashboard} alt="" /> DashBoard </Link>
                        </a>
                      </li>
                      )}
                        
                        <li className="text-white hover:bg-[#B67B0F]  cursor-pointer">
                          <a>
                            {" "}
                            <img src={helloIcon} alt="" /> My Account
                          </a>
                        </li>
                        <Link to="/Order">
                          <li className="text-white hover:bg-[#B67B0F] cursor-pointer">
                            <a>
                              {" "}
                              <img src={orderIcon} alt="Order-image" /> Orders
                            </a>
                          </li>
                        </Link>
                        <li className="text-white hover:bg-[#B67B0F] cursor-pointer">
                          <a>
                            {" "}
                            <img src={inbox} alt="" /> Inbox
                          </a>
                        </li>
                        <li>
                          <button
                            className=" hover:bg-[#B67B0F] cursor-pointer flex gap-1 px-4 py-2 text-sm text-red-600 "
                            onClick={() =>
                              document.getElementById("my_modal_2").showModal()
                            }
                          >
                            {" "}
                            <img   src={logOut} alt="" /> Log Out
                          </button>
                        </li>
                      </ul>
                      <dialog
                      id="my_modal_2"
                      className="modal h-fit flex justify-center items-center"
                    >
                      <form method="dialog" className="modal-backdrop">
                        <div className="modal-box bg-[#252422] w-[425px]  p-6 flex flex-col items-center justify-center text-center ">
                          <div>
                            <img
                              className="mb-4"
                              src={checkIcon}
                              // src={checkIcon}
                              alt="check-image"
                            />
                          </div>
                          <h3 className="font-bold text-lg text-white ">
                            Log Out
                          </h3>
                          <p className="py-4 text-white">
                            {" "}
                            Are you sure, you want to Log out?
                          </p>
                          <div className="flex justify-center gap-17 w-full mt-4">
                            <button
                              onClick={logout}
                              className="btn text-white rounded-4xl bg-[#252422] w-35 h-10"
                            >
                              Log Out
                            </button>
                            <button className="btn cursor-pointer text-white rounded-4xl bg-[#B67B0F] w-35 h-10">
                              Cancel
                            </button>
                          </div>
                        </div>

                        {/* <button>close</button> */}
                      </form>
                    </dialog>
                    </div>
                  </div>
                ) : (
                  <div className="cursor-pointer flex items-center w-[98px] h-[50px] justify-center  md:w-[124px] lg:h-[56px] py-[15px] px-[20px]  bg-[#F0F0F0]  rounded-full ">
                    <img src={loginLogo} alt="login-logo" />{" "}
                    <span className="ps-2 text-[#100101] font-[500] text-[20px]">
                      {" "}
                      <AuthModal text="Login" />{" "}
                    </span>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </nav>
        <div className="w-full mx-auto  px-[14px]  md:px-0 py-[10px] md:py-0 ">
          {isTrue && <SearchField />}
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Navbar;
