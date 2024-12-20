import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
    {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
        items: [
            {
                name: { type: String, required: true },
                price: { type: Number, required: true },
                quantity: { type: Number, required: true },
            },
        ],
        amount: { type: Number, required: true },
        address: {
            firstName: { type: String, required: true },
            lastName: { type: String, required: true },
            street: { type: String, required: true },
            city: { type: String, required: true },
            state: { type: String, required: true },
            zipcode: { type: String, required: true },
            country: { type: String, required: true },
            email: { type: String, required: true },
            phone: { type: String, required: true },
        },
        status: {
            type: String,
            default: "Food Processing",
            enum: ["Food Processing", "Shipped", "Delivered", "Cancelled"],
        },
        payment: { type: Boolean, default: false },
    },
    { timestamps: true }
);

const OrderModel = mongoose.models.order || mongoose.model("order", orderSchema);
export default OrderModel;
