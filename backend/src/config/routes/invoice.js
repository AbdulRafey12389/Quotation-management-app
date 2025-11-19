import mongoose from "mongoose";

const invoiceSchema = new mongoose.Schema(
  {
    // ======================================
    // 🟦 STEP 0 — CUSTOMER DETAILS
    // ======================================
    customerName: { type: String, required: true },
    companyName: { type: String, required: true },

    email: { type: String, required: true },
    phone: { type: String, required: true },

    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    postalCode: { type: String, required: true },

    // ======================================
    // 🟩 STEP 1 — ORDER SOURCES
    // ======================================
    orderSource: { type: String, required: true },
    orderDate: { type: String, required: true }, // YYYY-MM-DD

    deliveryAddress: { type: String, required: true },

    issueDate: { type: String, required: true },
    dueDate: { type: String, required: true },

    paymentMethod: { type: String, required: true }, // Cash, Cheque, Bank Transfer
    advance: { type: Number, default: 0 },
    terms: { type: String },


    products: [
      {
        productName: { type: String, required: true },
        description: { type: String },
        quantity: { type: Number, required: true },
        unitPrice: { type: Number, required: true },
        totalPrice: { type: Number, required: true },
      },
    ],

    subTotal: { type: Number, required: true },
    totalDiscountApplied: { type: Number, default: 0 },
    totalTaxApplied: { type: Number, default: 0 },
    grandTotal: { type: Number, required: true },

    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    status: {
      type: String,
      enum: ["pending", "approved", "cancelled"],
      default: null,
    }, // Pending / Approved / Cancelled
  },
  { timestamps: true }
);

export default mongoose.model("Invoice", invoiceSchema);
