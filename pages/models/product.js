import mongoose from 'mongoose';
const { Schema } = mongoose;

const ProductSchema =  new Schema({

    title: {type: String,required: true}, // String is shorthand for {type: String}
    slug: {type: String,required: true,unique:true},
    desc: {type: String,required: true},
    img: {type: String,required: true},
    category: {type: String,required: true},
    size: {type: String}, // String is shorthand for {type: String}
    colour: {type: String}, // String is shorthand for {type: String}
    price: {type: Number,required:true}, // String is shorthand for {type: String}
    availableQty: {type: Number,required:true}, // String is shorthand for {type: String}
   
    
  });
  mongoose.models = {}
  export default mongoose.model('Product', ProductSchema);