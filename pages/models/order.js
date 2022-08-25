import mongoose from 'mongoose';
const { Schema } = mongoose;


const OrderSchema = new Schema({
    userId: {type: String,required: true}, // String is shorthand for {type: String}
    Products: [{
        ProductId: {type: String},
        quantity: {type: Number, default:1}
    }],
    address: {type:string,required:true},
    amount: { type: Number, required:true },
    status: { type: String, default: 'Pending',required: true }
    
  });
  export default  mongoose.model('Order', OrderSchema);