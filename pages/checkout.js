import React from "react";
import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import {
  AiFillCloseCircle,
  AiFillMinusCircle,
  AiFillPlusCircle,
  AiFillShopping,
} from "react-icons/ai";
const Checkout =  ({ addtocart, removefromcart, cart, total, clearcart, }) => {
  const initiatepayment = async ()=>{
    
 
   
    let oid = Math.floor(Math.random() * Date.now());
    const data = { cart,total,oid,email:'email' };
    
    let a = await  fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pretransaction`, {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
let txnres = await a.json()
let txnToken = txnres.txnToken
// console.log(txnToken)
    var config = {
      "root": "",
      "flow": "DEFAULT",
      "data": {
      "orderId": oid, /* update order id */
      "token": txnToken, /* update token value */
      "tokenType": "TXN_TOKEN",
      "amount": total /* update amount */
      },
      "handler": {
      "notifyMerchant": function(eventName,data){
      console.log("notifyMerchant handler function called");
      console.log("eventName => ",eventName);
      console.log("data => ",data);
    
      }
      }
      };
      
    
      // initialze configuration using init method
      window.Paytm.CheckoutJS.init(config).then(function onSuccess() {
      // after successfully updating configuration, invoke JS Checkout
      window.Paytm.CheckoutJS.invoke();
      }).catch(function onError(error){
      console.log("error => ",error);
      });
    
  }
 

  return (
    <>
      <section className="text-gray-600 body-font relative">
        <Head><meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"/></Head>
        <Script type="application/javascript" src={`${process.env.NEXT_PUBLIC_PAYTM_HOST}/merchantpgpui/checkoutjs/merchants/${process.env.NEXT_PUBLIC_PAYTM_MID}.js`} crossorigin="anonymous"/>
        
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-col text-center w-full mb-6">
            <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900">
              Checkout
            </h1>
          </div>

          <div className="lg:w-2/3 md:w-2/3 mx-auto">
            <h2 className="sm:text-xl text-lg font-medium title-font mb-2 text-gray-900">
              Delivery Details
            </h2>
            <div className="flex flex-wrap font-semibold">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="address" className="leading-7 text-sm text-gray-600">
                    address
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    rows="2"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200  text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="phone" className="leading-7 text-sm text-gray-600">
                    phone
                  </label>
                  <input
                    type="phone"
                    id="phone"
                    name="phone"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="city" className="leading-7 text-sm text-gray-600">
                    city
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="state" className="leading-7 text-sm text-gray-600">
                    state
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="pincode" className="leading-7 text-sm text-gray-600">
                    pincode
                  </label>
                  <input
                    type="pincode"
                    id="pincode"
                    name="pincode"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="flex flex-col w-full m-auto">
                <h2 className="sm:text-xl text-lg font-medium title-font mb-2 text-gray-900 py-5">
                  Review Cart Items.
                </h2>
                <div className=" sidecart relative block mt-3 p-5 w-full h- full colour bg-tahiti-50 z-10 ">
                    
                  <h2 className="font-bold text-xl text-center">
                    shopping cart
                  </h2>

                  <ol className="list-decimal font-semibold mt-5 ">
                    {Object.keys(cart).length == 0 && (
                      <div className="mt-3 font-normal">no items added</div>
                    )}
                    {Object.keys(cart).map((k) => {
                      return (
                        <li key={k}>
                          <div className="flex ">
                            <div className=" w-2/3 p-1  font-normal ">
                              {cart[k].name}
                            </div>
                            <div className="flex w-28 text-center items-center justify-between pl-2 ">
                              <div className="text-tahiti-200 text-lg p-1 cursor-pointer">
                                <AiFillMinusCircle
                                  onClick={() => {
                                    removefromcart(
                                      k,
                                      1,
                                      "this is the product",
                                      58,
                                      "xl",
                                      "red"
                                    );
                                  }}
                                />
                              </div>
                              {console.log(cart[k])}
                              <span className=" p-1">{cart[k].qty}</span>

                              <div className="text-tahiti-200 text-lg p-1 cursor-pointer">
                                <AiFillPlusCircle
                                  onClick={() => {
                                    addtocart(
                                      k,
                                      1,
                                      "this is the product",
                                      58,
                                      "xl",
                                      "red"
                                    );
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ol>
                  <span className="text-lg font-medium title-font mb-2 text-gray-900">subtotal: {total}</span>
                </div>
                <Link href={'/checkout'}><a className="m-auto"><button onClick={initiatepayment} disabled = {true}className="grow w-15 mt-4 mx-1  text-white bg-tahiti-200 disabled :bg-pink-300 border-0  py-2 px-1 focus:outline-none hover:bg-tahiti-300 rounded text-lg"><AiFillShopping className=" grow inline-block flex-wrap ml-0 "/> checkout</button></a></Link>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;
