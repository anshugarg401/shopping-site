import React from "react";
import Link from "next/link";
import Image from "next/image";
import { TiShoppingCart } from "react-icons/ti";
import { AiFillCloseCircle,AiFillMinusCircle,AiFillPlusCircle,AiFillShopping} from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { useRef } from "react";

const Navbar = ({addtocart,removefromcart, cart, total, clearcart}) => {
 
  const ref = useRef();

  const togglecart = () => {

    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
    
    
  };

  
  return (
    <div className="sticky top-0 z-9000">
      <div className="flex flex-col md:flex-row justify-evenly md: shadow-md bg-white mr-0 mb-2 ">
        <div className="nav flex items-center lg:py-4">
          <ul className="flex items-center space-x-4 font-bold md:text-xl ">
          <div className="logo sm:ml-2 md:mx-4 lg:absolute inset-y-0 left-0 py-2">
          <Link href={"/"}>

            <Image
              className="rounded-full"
              src="/newlogo.avif"
              alt=""
              height={40}
              width={40}
            />

          </Link>
          <div className="absolute inset-y-0 left-0 py-2 ml-10 text-2xl text-pink-500">Shopify</div>
        </div>
            <Link href={"/"}>

              <li className=" hover:text-pink-500">Home</li>

            </Link>
            <Link href={"/t-shirts"}>

              <li className=" hover:text-pink-500">T-shirts</li>

            </Link>
            <Link href={"/hoodies"}>

              <li className=" hover:text-pink-500">Hoodies</li>

            </Link>
            <Link href={"/mugs"}>

              <li className=" hover:text-pink-500">Mugs</li>

            </Link>
          </ul>

          <div className="cart absolute right-0 mx-5 ">
            <TiShoppingCart
              className=" m-1 text-xl md:text-3xl cursor-pointer "
              onClick={togglecart}
            />
            
          </div>
          <Link href={"/login"} legacyBehavior><div className="cart absolute right-12 mx-5">
          <CgProfile
              className=" m-1 text-xl md:text-3xl cursor-pointer "
             
            />
            
          </div></Link>
          
          <div
            ref={ref}
            className=" sidecart absolute rounded-md shadow-md w-64 h-[100vh] top-0 right-0  p-5 colour bg-tahiti-100 z-10 transition-transform translate-x-full"
          >
            <h2 className="font-bold text-xl text-center">Shopify Cart</h2>
            <span
              className="cross absolute top-0 right-0 m-2 cursor-pointer text-tahiti-200"
              onClick={togglecart}
            >
              <AiFillCloseCircle />
            </span>
            <ol className="list-decimal font-semibold mt-5 ">
              {Object.keys(cart).length == 0 && 
              <div className="mt-8 font-medium">
                Your Shopify cart is empty
                </div>}
              {Object.keys(cart).map((k)=>{ return <li key={k}>
                <div className="flex ">
                  <div className=" w-2/3 p-1  font-normal ">
                    
                   {cart[k].name} ({cart[k].size}/{cart[k].colour})
                  </div>
                  <div className="flex w-1/3 text-center items-center justify-between pl-2 ">
                  <div className="text-tahiti-200 text-lg p-1 cursor-pointer">
                    <AiFillMinusCircle onClick={()=>{removefromcart(k,1,'this is the product', 58,'xl','red')}}/>
                  </div>
                 { console.log(cart[k])}
                  <span className=" p-1">{cart[k].qty}</span>
                  
                  <div className="text-tahiti-200 text-lg p-1 cursor-pointer">
                    <AiFillPlusCircle onClick={()=>{addtocart(k,1,'this is the product', 58,'xl','red')}}/>
                  </div>
                  </div>
                </div>
              </li>})}
             
            </ol>
            <div className="text-lg font-medium title-font m-2 text-gray-900">Subtotal: {total}</div>
            <div className="flex flex-wrap">
            <Link href={'/checkout'}><button className="grow w-15  mt-4 mx-1  text-white bg-tahiti-200 border-0  py-2 px-1 focus:outline-none hover:bg-tahiti-300 rounded text-lg"><AiFillShopping className=" grow inline-block flex-wrap ml-0 "/> checkout</button></Link>
            <button onClick={()=>{clearcart()}} className="grow w-13 mt-4 mx-1 text-white bg-tahiti-200 border-0  px-1 focus:outline-none hover:bg-tahiti-300 rounded text-lg">clear cart</button>
            </div>
            
          </div>
        </div>
        

        
      </div>
    </div>
  );
};

export default Navbar;
