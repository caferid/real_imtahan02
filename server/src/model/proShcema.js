import mongoose from 'mongoose'

const proSchema = new mongoose.Schema({
    name: String,
    info:String,
    price:Number
  });

  export const Product = mongoose.model('product007', proSchema);
