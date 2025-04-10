import mongoose from "mongoose";
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  orderedItems: [
    {
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
      category: {
        type: String,
        required: true,
      },
      price: {
        type: String,
        required: true,
      },
      duration: {
        type: String,
        required: true,
      },
      rating: {
        type: String,
        required: true,
      },
    },
  ],
  recipientInfo:{
    fullName:{type:String,required:[true, "fullname is required"]},
    email:{type:String,required:[true,"email is required"]},
    phoneNumber:{type:String,required:[true, "phone number is required"],
        maxlength:[11, "maximum phone number length must be 11"]}
  }
});