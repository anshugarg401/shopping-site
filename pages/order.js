import React from 'react';
import Link from "next/link";

const Order = ({total}) => {
    return <div>
        <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">shopify</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">Order_id : 124293095</h1>
        <p className="leading-relaxed mb-4">your Order has been successfully placed </p>
        <div className="flex mb-4 font-bold">
        <span className="text-gray-500">Cart Item</span>
          <span className="ml-auto text-gray-900">Price</span>
          <span className="ml-auto text-gray-900">Quantity</span>
        </div>
        
        <div className="flex border-t border-gray-200 py-2">
          <span className="text-gray-500">product 1</span>
          <span className="ml-auto text-gray-900">$58.00</span>
          <span className="ml-auto text-gray-900">1</span>
        </div>
        <div className="flex border-t border-gray-200 py-2">
          <span className="text-gray-500">product 2</span>
          <span className="ml-auto text-gray-900">$58.00</span>
          <span className="ml-auto text-gray-900">1</span>
        </div>
        <div className="flex border-t border-b mb-6 border-gray-200 py-2">
          <span className="text-gray-500">product 3</span>
          <span className="ml-auto text-gray-900">$58.00</span>
          <span className="ml-auto text-gray-900">1</span>
        </div>
        <div className="flex flex-col">
        <div className="text-xl font-medium title-font m-2 text-gray-900">subtotal: {total}</div>
           
            <Link href={'/'}><a><button className="flex mt-2 m-auto  text-white bg-tahiti-200 border-0  py-1 px-2 focus:outline-none hover:bg-tahiti-300 rounded text-lg"> track order</button></a></Link>
            
          
        </div>
      </div>
      <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400"/>
    </div>
  </div>
</section>
    </div>
}



export default Order;