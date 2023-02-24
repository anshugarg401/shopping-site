import { useRouter } from 'next/router'

import { useState,useEffect } from 'react'
import product from '../models/product'
import mongoose from 'mongoose'



const Post = ({addtocart ,product,varients}) => {
  console.log(product,varients)
  

  
  const router = useRouter()
  const { Slug } = router.query
  const [pin, setpin] = useState()
  const [service, setservice] = useState()
  const [colour, setcolour] = useState(product.colour)
const [size, setsize] = useState(product.size)
useEffect(() => {
 
    setcolour(product.colour)
    setsize(product.size)
  
}, [router.query])

  const refreshvarients = (newsize,newcolour)=>{
    console.log(varients,newsize,newcolour)
        
    let url = `http://localhost:3000/product/${varients[newcolour][newsize]['slug']}`
   
       

          router.push(url)
     
    }
  const checkserviblity = async ()=>{
      const pins = await fetch("http://localhost:3000/api/pincodes")
      const pinjson = await pins.json()
      
      
      if(pinjson.includes(parseInt(pin))){
        setservice(true)
      }
      else if(!pinjson.includes(parseInt(pin))){
        setservice(false)
      } 
  }
  const onchange = (e)=>{
    setpin(e.target.value)
  }
  
  

  return(
   

    <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-10 mx-auto">
    <div className="lg:w-1/2 mx-auto flex flex-wrap">
      <img alt="ecommerce" className=" lg:w-1/2 w-full md:h-auto  object-scale-down object-center rounded" src={product.img}/>
      <div className="lg:w-1/2 w-full lg:pl-16 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">Shopify</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.title}({product.size}/{product.colour})</h1>
        <div className="flex mb-4">
          
          
        </div>
        <p className="leading-relaxed">{product.desc}</p>
        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
          <div className="flex">
            <span className="mr-3">Color</span>
            
            {Object.keys(varients).includes('yellow') && Object.keys(varients['yellow']).includes(size) &&  <button  onClick={()=>{refreshvarients(size,'yellow')}}className={`mx-1 border-2 border-gray-300 ml-1 bg-yellow-300 rounded-full w-6 h-6 focus:outline-none ${colour === 'yellow'? 'border-black' : 'border-gray-300'}`}></button>}  
            {Object.keys(varients).includes('red') && Object.keys(varients['red']).includes(size) &&  <button  onClick={()=>{refreshvarients(size,'red')}}className={`mx-1 border-2 border-gray-300 ml-1 bg-red-600 rounded-full w-6 h-6 focus:outline-none ${colour === 'red'? 'border-black' : 'border-gray-300'}`}></button>}  
            {Object.keys(varients).includes('green') && Object.keys(varients['green']).includes(size) &&  <button  onClick={()=>{refreshvarients(size,'green')}}className={`mx-1 border-2 border-gray-300 ml-1 bg-green-600 rounded-full w-6 h-6 focus:outline-none ${colour === 'green'? 'border-black' : 'border-gray-300'}`}></button>}  
            {Object.keys(varients).includes('violet') && Object.keys(varients['violet']).includes(size) &&  <button  onClick={()=>{refreshvarients(size,'violet')}}className={`mx-1 border-2 border-gray-300 ml-1 bg-violet-600 rounded-full w-6 h-6 focus:outline-none ${colour === 'violet'? 'border-black' : 'border-gray-300'}`}></button>}  
            {Object.keys(varients).includes('blue') && Object.keys(varients['blue']).includes(size) && <button onClick={()=>{refreshvarients(size,'blue')}} className={`mx-1 border-2 border-gray-300 ml-1 bg-blue-500 rounded-full w-6 h-6 focus:outline-none ${colour === 'blue'? 'border-black' : 'border-gray-300'}`}></button>} 
          </div>
          <div className="flex ml-6 items-center">
            <span className="mr-3">Size</span>
            <div className="relative">
              <select value = {size} onChange={(e)=>{refreshvarients(e.target.value,colour)}} className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
               {Object.keys(varients[colour]).includes('S') && <option>S</option>}
               {Object.keys(varients[colour]).includes('M') && <option>M</option>}
               {Object.keys(varients[colour]).includes('L') && <option>L</option>}
               {Object.keys(varients[colour]).includes('XL') && <option>XL</option>}
                
              </select>
              <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div className="flex">
          <span className="title-font font-medium text-2xl text-gray-900 mr-8">$58.00</span>
          <button onClick={()=>{addtocart(Slug,1, product.title, product.price,product.size,product.colour)}} className="flex  text-white bg-indigo-500 border-0 p-1 pt-2 md:py-2 md:px-3 focus:outline-none hover:bg-indigo-600 rounded mx-2 text-sm ">add to cart</button>
          <button className="flex  text-white bg-indigo-500 border-0 p-1 pt-2 md:py-2 md:px-3 focus:outline-none hover:bg-indigo-600 rounded mx-2 text-sm  ">buy now</button>
          <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
            </svg>
          </button>
        </div>
        <div className="flex mt-5">
          <input onChange={onchange} type="text" className='border-2 border-tahiti-200  mr-3 rounded-md '/>
          <button onClick={checkserviblity} className='flex  text-white bg-indigo-500 border-0 py-2 px-3 focus:outline-none hover:bg-indigo-600 rounded'>check</button>
        </div>
        {service && service != null && <div className='mt-3 text-emerald-400'>the service to your pincode is available</div>}
        {!service && service != null &&  <div className='mt-3 text-indigo-600'>the service to your pincode is not available</div>}
      </div>
    </div>
  </div>
</section>
  )


  

  }


export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }
 
  let products = await product.findOne({slug : context.query.Slug});
  let varients = await product.find({title : products.title})
    let coloursizeslug = {} // {red: {XL:{slug : this is shopify}}}
    for(let items of varients){
      if(Object.keys(coloursizeslug).includes(items.colour)){
        coloursizeslug[items.colour][items.size] = {slug : items.slug}
      }else{
        coloursizeslug[items.colour] = {}
        coloursizeslug[items.colour][items.size] = {slug : items.slug}
      }
    }
     

     
  
    return {
      props: { product: JSON.parse(JSON.stringify(products)),varients:JSON.parse(JSON.stringify(coloursizeslug))} // will be passed to the page component as props
  
    };
  }
   

  export default Post;
