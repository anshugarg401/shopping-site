import product from "../models/product"
import connectDb from "../../middleware/mongoose"


const handler = async (req, res)=> {
 
   
    let products = await product.find()
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

    res.status(200).json({ tshirt })
  }

export default connectDb(handler)
  