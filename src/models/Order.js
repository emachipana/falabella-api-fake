import { model, Schema } from "mongoose";

const ordersSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    orders: [{
      orderId: {
        type: String,
        required: true,
      },
      storeName: {
        type: String,
        required: true,
      }
    }]
  },
  {
    timestamps: true,
    versionKey: false
  }
);

ordersSchema.methods.toJSON = function() {
  const { _id, ...orders } = this.toObject();
  
  return { id: _id, ...orders };
}

const Orders = model('Orders', ordersSchema);

export default Orders;
