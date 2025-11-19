import Invoice from "../../model/quotation.js";

export const createQuotation = async (req, res) => {
  try {
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized - User info missing",
      });
    }

    const {
      // STEP 0 — CUSTOMER DETAILS
      customerName,
      companyName,
      address,
      city,
      state,
      postalCode,
      email,
      phone,
      specialInstruction,

      // STEP 1 — ORDER DETAILS
      orderSource,
      orderDate,
      deliveryAddress,
      issueDate,
      dueDate,
      paymentMethod,
      advance,
      terms,

      // STEP 2 — PRODUCTS (Array)
      products,

      // STEP 3 — SUMMARY
      subTotal,
      totalDiscount,
      totalTax,
      grandTotal,
    } = req.body;

    // Create new quotation
    const newQuotation = await Invoice.create({
      // STEP 0
      customerName,
      companyName,
      address,
      city,
      state,
      postalCode,
      email,
      phone,
      specialInstruction,

      // STEP 1
      orderSource,
      orderDate,
      deliveryAddress,
      issueDate,
      dueDate,
      paymentMethod,
      advance,
      terms,

      // STEP 2
      products,

      // STEP 3
      subTotal,
      totalDiscount,
      totalTax,
      grandTotal,

      // CREATOR
      createdBy: userId,
    });

    return res.status(201).json({
      success: true,
      message: "Quotation created successfully",
      quotation: newQuotation,
    });
  } catch (error) {
    console.log("Create Quotation Error:", error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};
