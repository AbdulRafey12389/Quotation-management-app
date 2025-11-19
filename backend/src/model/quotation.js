import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    productName: { type: String, required: true },
    category: { type: String, required: true },
    unitMeasure: { type: String, required: true },
    quantity: { type: Number, required: true },
    cityProduct: { type: String, default: "" },
    phoneProduct: { type: String, default: "" },
    unitPrice: { type: Number, required: true },
    discountApplied: { type: Number, default: 0 },
    taxApplied: { type: Number, default: 0 },
  },
  { _id: false }
);

const quotationSchema = new mongoose.Schema(
  {
    /* -------------------------
     * STEP 0 — Customer Details
     * ------------------------- */
    customerName: { type: String, required: true },
    companyName: { type: String, default: "" },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    postalCode: { type: String, required: true },
    email: { type: String, default: "" },
    phone: { type: String, required: true },
    specialInstruction: { type: String, default: "" },

    /* -------------------------
     * STEP 1 — Order Sources
     * ------------------------- */
    orderSource: { type: String, required: true },
    orderDate: { type: Date, required: true },
    deliveryAddress: { type: String, required: true },
    issueDate: { type: Date, required: true },
    dueDate: { type: Date, required: true },
    paymentMethod: { type: String, required: true },
    advance: { type: Number, default: 0 },
    terms: { type: String, default: "" },

    /* -------------------------
     * STEP 2 — Product Details
     * ------------------------- */
    products: {
      type: [productSchema],
      required: true,
      validate: (arr) => arr.length > 0,
    },

    /* -------------------------
     * STEP 3 — Summary
     * ------------------------- */
    subTotal: { type: Number, required: true },
    totalDiscount: { type: Number, required: true },
    totalTax: { type: Number, required: true },
    grandTotal: { type: Number, required: true },

    /* -------------------------
     * Created By (User / Admin)
     * ------------------------- */
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

    /* -------------------------
     * For future reference
     * ------------------------- */
    status: {
      type: String,
      enum: ["pending", "approved", "rejected", "completed"],
      default: "pending",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Quotation", quotationSchema);
