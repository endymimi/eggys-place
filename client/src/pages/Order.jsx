import React from "react";
import { useState, useEffect, useContext } from "react";
import CartContext from "../context/CartContext";
import SimilarProducts from "../components/SimilarProducts";
import { menuItems } from "../db";
import UseTitle from "../Hooks/UseTitle";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";



const baseUrl = import.meta.env.VITE_API_URL;

const Order = () => {
  console.log(Order);
  const { cart, setCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);
  UseTitle("Your OrderPage | Eggys place");

  function handleRemove(cartId) {
    let remove = cart.filter((cartItem) => cartItem._id !== cartId);
    console.log(333);

    setCart(remove);
  }
  const { productId } = useParams();

  const fetchProduct = async () => {
    try {
      const req = await fetch(`${baseUrl}/${productId}`);
      const res = await req.json();
      setProduct(res.product);
      const allproducts = await fetch(`${baseUrl}/all-products`);
      const allproductsData = await allproducts.json();
      const filteredSimilarProducts = allproductsData.products.filter(
        (item) => item.category === res.product.category && item._id
      );
      setSimilarProducts(filteredSimilarProducts);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProduct();
  }, [productId]);

  const threeRandomItems = menuItems
    .filter(() => Math.random() < 0.5)
    .slice(0, 3);

  return (
    <>
      <header className="bg-[#252422]">
        <main className=" min-h-screen p-6">
          <section className="container mx-auto max-w-3xl bg-black pl-3 pr-3">
            {/* Tabs */}
            <h3 className="text-white text-2xl">Orders</h3>
            <hr className="text-[#FBFBFB]" />
            <div className="flex  text-white">
              <p className="text-lg cursor-pointer pb-2 border-b-4 border-[#B67B0F]">
                Ongoing/Delivered
              </p>
              <p className="text-lg cursor-pointer ml-6 pb-2 text-grey-400">
                Cancelled
              </p>
            </div>

            {/* Orders List */}
            <div className="mt-6 space-y-4">
              <div
                key={productId}
                className="bg-[#252422] rounded-xl p-4 flex items-center shadow-md"
              >
                {/* Image */}
                <Link to={`/product/${productId}`}>
                  <img
                    src={product?.image}
                    alt={product?.title}
                    className="w-24 h-24 rounded-md"
                  />
                </Link>

                {/* Order Details */}
                <div className="ml-4 flex-grow">
                  <h3 className="text-white text-lg font-semibold">
                    {product?.title}
                  </h3>
                  <h2 className="text-white font-medium">
                    &#8358;{product?.price}
                  </h2>
                  <p className="text-[#252422]">{product?.date}</p>
                  <span className="bg-green-600 text-white text-xs px-3 py-1 rounded-full">
                    Delivered
                  </span>
                </div>

                {/* View Details */}
                <h2 className="text-[#B67B0F] text-sm cursor-pointer">
                  View Details...
                </h2>
              </div>
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8 pb-7 space-x-2">
              <button className="bg-[#252422] text-white px-3 py-1 rounded">
                1
              </button>
              <button className="bg-[#252422] text-gray-300 px-3 py-1 rounded">
                2
              </button>
              <button className="bg-[#252422] text-gray-300 px-3 py-1 rounded">
                ...
              </button>
              <button className="bg-[#252422] text-gray-300 px-3 py-1 rounded">
                10
              </button>
            </div>
          </section>
        </main>
        <section className="wrapper bg-[#2F2F2F] text-white">
          <SimilarProducts/>
        </section>
        
      </header>
      
    </>
  );
};

export default Order;
