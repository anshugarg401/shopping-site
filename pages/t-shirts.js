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
            {Object.keys(products).map((k)=>{
              return <Link key={products[k]._id} href={`/product/${products[k].slug}`}>
              <div className="lg:w-1/5 md:w-1/4 p-4 w-full m-2 shadow-lg ">
                <a className="block relative  cursor-pointer rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className=" w-[16vh] md:w-[20vh] h-[20vh] md:h-[35vh] m-auto shadow-lg "
                    src={products[k].img}
                  />
                </a>
                <div className="mt-4 text-center ">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    {products[k].category}
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    {products[k].title}
                  </h2>
                  <p className="mt-1">{k.price}</p>
                  <div className=" flex mt-1 ">
                   {products[k].size.includes('XL') && <span className="border-2  rounded-sm mx-1 p-1">XL</span>} 
                   {products[k].size.includes('L') && <span className="border-2 rounded-sm mx-1 p-1" >L</span>}  
                   {products[k].size.includes('M') && <span className="border-2 rounded-sm mx-1 p-1" >M</span>}  
                   {products[k].size.includes('S') && <span className="border-2 rounded-sm mx-1 p-1" >S</span>} 
                  </div>
                  <div className="flex mt-1">
                  {products[k].colour.includes('yellow') && <button className="mx-1 border-2 border-gray-300 ml-1 bg-yellow-300 rounded-full w-6 h-6 focus:outline-none"></button>}  
                  {products[k].colour.includes('red') && <button className="mx-1 border-2 border-gray-300 ml-1 bg-red-600 rounded-full w-6 h-6 focus:outline-none"></button>}  
                  {products[k].colour.includes('green') && <button className="mx-1 border-2 border-gray-300 ml-1 bg-green-600 rounded-full w-6 h-6 focus:outline-none"></button>}  
                  {products[k].colour.includes('violet') && <button className="mx-1 border-2 border-gray-300 ml-1 bg-violet-600 rounded-full w-6 h-6 focus:outline-none"></button>}  
                  {products[k].colour.includes('blue') && <button className="mx-1 border-2 border-gray-300 ml-1 bg-blue-500 rounded-full w-6 h-6 focus:outline-none"></button>} 
                    </div>
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

  let products = await product.find({category: "t-shirts"});
  let tshirt = {}
    for( let item of products){
      if(item.title in tshirt){
          if(!tshirt[item.title].colour.includes(item.colour) && item.availableQty > 0 ){
            tshirt[item.title].colour.push(item.colour)
            
          }
          if(!tshirt[item.title].size.includes(item.size) && item.availableQty > 0 ){
            tshirt[item.title].size.push(item.size)

          }
      }else{
        tshirt[item.title] = JSON.parse(JSON.stringify(item))
        if(item.availableQty > 0){
            tshirt[item.title].colour = [item.colour]
            tshirt[item.title].size = [item.size]
        }
      }
    }

   

  return {
    props: { products: JSON.parse(JSON.stringify(tshirt))}, // will be passed to the page component as props
  };
}

export default Tshirts;
