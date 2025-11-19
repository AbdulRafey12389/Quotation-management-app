export const validateStep = (step, formData) => {
  let newErrors = {};

  // STEP 0 — Customer / Basic Info
  if (step === 0) {
    if (!formData.customerName)
      newErrors.customerName = "Customer name is required";
    if (!formData.companyName)
      newErrors.companyName = "Company name is required";

    if (!formData.address) newErrors.address = "Delivery address is required";

    if (!formData.city) newErrors.city = "City is required";
    if (!formData.state) newErrors.state = "State is required";

    if (!formData.postalCode) newErrors.postalCode = "Postal Code is required";

    if (!formData.email) newErrors.email = "Email is required";
    else if (!formData.email.includes("@"))
      newErrors.email = "Invalid email format";

    if (!formData.phone) newErrors.phone = "Phone number is required";
  }

  if (step === 1) {
    if (!formData.orderSource)
      newErrors.orderSource = "Order source is required";
    if (!formData.orderDate) newErrors.orderDate = "Order date is required";
    if (!formData.deliveryAddress)
      newErrors.deliveryAddress = "Delivery address is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.issueDate) newErrors.issueDate = "Issue date is required";
    if (!formData.dueDate) newErrors.dueDate = "Due date is required";
    if (!formData.paymentMethod)
      newErrors.paymentMethod = "Payment method is required";
    if (!formData.advance) newErrors.advance = "Advance is required";
    if (!formData.terms) newErrors.terms = "Terms & conditions required";
  }
  if (step === 2) {
    if (!formData.productName)
      newErrors.productName = "Product Name is required";
    if (!formData.category) newErrors.category = "Category is required";
    if (!formData.unitMeasure)
      newErrors.unitMeasure = "Unit Measure is required";
    if (!formData.quantity) newErrors.quantity = "Quantity is required";
    if (!formData.cityProduct) newErrors.cityProduct = "City is required";
    if (!formData.phoneProduct)
      newErrors.phoneProduct = "Phone Number is required";
    if (!formData.unitPrice) newErrors.unitPrice = "Unit Price is required";
    if (!formData.discountApplied)
      newErrors.discountApplied = "Discount is required";
    if (!formData.taxApplied) newErrors.taxApplied = "Tax Applied is required";
  }

  if (step === 3) {
    if (!formData.subTotal) newErrors.subTotal = "Sub Total is required";
    if (!formData.totalDiscount)
      newErrors.totalDiscount = "Total Discount is required";
    if (!formData.totalTax) newErrors.totalTax = "Total Tax is required";
    if (!formData.grandTotal) newErrors.grandTotal = "Grand Total is required";
  }

  return newErrors;
};
