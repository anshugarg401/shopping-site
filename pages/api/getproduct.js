import product from "../models/product"
import connectDb from "../../middleware/mongoose"


const handler = async (req, res)=> {
 
   
    let products = await product.find({category: "t-shirts"})
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

   products = await product.find({category: "hoodies"});
  let hoodies = {}
    for( let item of products){
      if(item.title in hoodies){
          if(!hoodies[item.title].colour.includes(item.colour) && item.availableQty > 0 ){
            hoodies[item.title].colour.push(item.colour)
            
          }
          if(!hoodies[item.title].size.includes(item.size) && item.availableQty > 0 ){
            hoodies[item.title].size.push(item.size)

          }
      }else{
        hoodies[item.title] = JSON.parse(JSON.stringify(item))
        if(item.availableQty > 0){
          hoodies[item.title].colour = [item.colour]
          hoodies[item.title].size = [item.size]
        }
      }
    }
   products = await product.find({category: "mugs"});
  let mugs = {}
    for( let item of products){
      if(item.title in mugs){
          if(!mugs[item.title].colour.includes(item.colour) && item.availableQty > 0 ){
            mugs[item.title].colour.push(item.colour)
            
          }
          if(!mugs[item.title].size.includes(item.size) && item.availableQty > 0 ){
            mugs[item.title].size.push(item.size)

          }
      }else{
        mugs[item.title] = JSON.parse(JSON.stringify(item))
        if(item.availableQty > 0){
          mugs[item.title].colour = [item.colour]
          mugs[item.title].size = [item.size]
        }
      }
    }


    res.status(200).json({ tshirt ,hoodies,mugs })
  }

export default connectDb(handler)
  