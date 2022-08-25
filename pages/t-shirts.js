import React from "react";
import Link from "next/link";
import product from "./models/product"
const mongoose = require('mongoose');
const Tshirts = ({products}) => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap justify-center">
            {products.map((k)=>{
              return <Link key={k._id} href={`/product/${k.slug}`}>
              <div className="lg:w-1/5 md:w-1/4 p-4 w-full m-2 shadow-lg ">
                <a className="block relative  cursor-pointer rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className=" w-[16vh] md:w-[20vh] h-[20vh] md:h-[35vh] m-auto shadow-lg "
                    src={k.img}
                  />
                </a>
                <div className="mt-4 text-center ">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    {k.category}
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    {k.title}
                  </h2>
                  <p className="mt-1">{k.price}</p>
                  <p className="mt-1">XL L M S</p>
                </div>
              </div>
            </Link>
            })
              
            }
          </div>
        </div>
      </section>
    </div>
  );
};
export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }

  let products = await product.find();
console.log(products)
  return {
    props: { products: JSON.parse(JSON.stringify(products))}, // will be passed to the page component as props
  };
}

export default Tshirts;
