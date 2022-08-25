import product from "../models/product";
import connectDb from "../../middleware/mongoose";

const handler = async (req, res) => {
  if (req.method == "POST") {
    for (let i = 0; i < req.body.length; i++) {
        // using for loop we can add multiple products at same time 
      let p = await product.findByIdAndUpdate(req.body[i]._id,req.body[i]);
 
      
    }
    res.status(200).json({ success: "success" });
  } else {
    res.status(400).json({ error: "this method is not allowed" });
  }

};

export default connectDb(handler);
