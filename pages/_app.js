import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState,useEffect } from 'react'

function MyApp({ Component, pageProps }) {
 

  const [cart, setcart] = useState({});
  const [total, settotal] = useState(0);
  useEffect(() => {
   
    
    try {
      if(localStorage.getItem('cart')){
        setcart(JSON.parse(localStorage.getItem('cart')))
        savecart(JSON.parse(localStorage.getItem('cart')))
      }

    } catch (error) {
      console.error(error);
      clearcart()
    }
  }, [])
  const savecart = (newcart)=>{
   
    console.log(Object.keys(newcart))
    localStorage.setItem('cart' , JSON.stringify(newcart));
    let subtotal = 0;
    let keys = Object.keys(newcart);
    for(let i = 0; i < keys.length; i++){
      subtotal += newcart[keys[i]].price*newcart[keys[i]].qty;
    }
    
    settotal(subtotal);
  }
  const addtocart = (itemcode,qty,name,price,size,colour)=>{
    
    let newcart = JSON.parse(JSON.stringify(cart));
    if(itemcode in cart){
      newcart[itemcode].qty = cart[itemcode].qty + qty;
    }else{
      newcart[itemcode] = {qty : 1,name,price,size,colour}
    }
    
    
    setcart(newcart);
    savecart(newcart);
  }
  const removefromcart = (itemcode,qty,name,price,size,colour)=>{
    let newcart = JSON.parse(JSON.stringify(cart));
    if(itemcode in cart){
      newcart[itemcode].qty = cart[itemcode].qty - qty;
    }
    if(newcart[itemcode].qty <= 0){
      delete newcart[itemcode]
    }
    setcart(newcart);
    savecart(newcart);
  }
  
  const clearcart = ()=>{
    setcart({})
    savecart({})
  }
  return <>
  <Navbar  addtocart = {addtocart} removefromcart = {removefromcart} cart = {cart} total = {total} clearcart = {clearcart} />
  <Component  addtocart = {addtocart} removefromcart = {removefromcart} cart = {cart} total = {total} clearcart = {clearcart} {...pageProps} />
  <Footer/>
  </>
  
  
}

export default MyApp
