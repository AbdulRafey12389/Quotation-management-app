import React, { useState } from "react";
import CustomerDetail from "../../components/CustomerDetail";
import OrderSources from "../../components/OrderSources";
import AddProduct from "../../components/AddProduct";
import PriceSummary from "../../components/PriceSummery";
import { validateStep } from "../../utils/validationStep";

const Quotation = () => {
  const [showPreview, setShowPreview] = useState(true);

  const [step, setStep] = useState(0);

  const steps = [
    { title: "Customer Details", component: CustomerDetail },
    { title: "Order Sources", component: OrderSources },
    { title: "Add Product", component: AddProduct },
    { title: "Price Summary", component: PriceSummary },
  ];

  const StepComponent = steps[step].component;
  const isLastStep = step === steps.length - 1;

  const [formData, setFormData] = useState({
    // Step 0 fields
    customerName: "",
    companyName: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    email: "",
    phone: "",
    specialInstruction: "",

    // Step 1
    orderSource: "",
    orderDate: "",
    deliveryAddress: "",
    issueDate: "",
    dueDate: "",
    paymentMethod: "",
    advance: "",
    terms: "",

    // Step 2 fields
    productName: "",
    category: "",
    unitMeasure: "",
    quantity: "",
    cityProduct: "", // renamed to avoid clash with Step0 city
    phoneProduct: "",
    unitPrice: "",
    discountApplied: "",
    taxApplied: "",

    // step 3 fields
    subTotal: "",
    totalDiscount: "",
    totalTax: "",
    grandTotal: "",
  });

  const [errors, setErrors] = useState({});

  const handleNext = () => {
    // const validateErrors = validateStep(step, formData);
    // setErrors(validateErrors);

    // if (Object.keys(validateErrors).length === 0) {
    // }
    setStep(step + 1);
  };

  const handleSubmit = () => {
    const validateErrors = validateStep(step, formData);
    setErrors(validateErrors);

    if (Object.keys(validateErrors).length === 0) {
      // Final submission logic here
      alert("Form submitted successfully!");
      console.log(formData);
    }
  };

  return (
    <div className="w-full lg:h-[calc(100vh-64px)] max-h-max p-2 bg-white ">
      {/* Title + Buttons */}
      <div className="flex justify-between items-center mb-3">
        <h1 className="text-2xl font-semibold">New Invoice</h1>

        <div className="flex gap-3">
          <button
            onClick={() => setShowPreview(!showPreview)}
            className="px-2 py-2 text-sm rounded-lg border bg-white hover:bg-gray-100 text-gray-700 shadow-sm"
          >
            {showPreview ? "Hide Preview" : "Show Preview"}
          </button>

          <button className="px-2 py-2 text-sm rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-700 shadow-sm">
            Save as Draft
          </button>

          <button className="px-2 py-2 text-sm  rounded-lg bg-[#1E90FF] text-white hover:bg-[#1877d8] shadow-sm">
            Send Invoice
          </button>
        </div>
      </div>

      {/* 50 / 50 Layout */}
      <div className="flex w-full lg:flex-row flex-col lg:h-[calc(100%-53px)] h-full gap-3">
        {/* LEFT FORM */}
        <div
          className={`bg-gray-100 rounded-xl w-full  lg:h-full  shadow p-5 overflow-y-auto transition-all duration-300 ${
            showPreview ? "w-1/2 lg:w-1/2" : "w-full"
          }`}
        >
          {/* Tabs */}
          <div className="flex gap-3 mb-5">
            {steps.map((tab, i) => (
              <button
                key={i}
                // onClick={() => setStep(i)}
                className={`px-4 py-1.5 text-[12px] rounded-full border-2 shadow-sm font-medium 
                ${
                  step === i
                    ? "border-blue-600 text-white bg-blue-600"
                    : "border-blue-600 text-blue-600 bg-white hover:bg-gray-100"
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          <StepComponent
            formData={formData}
            setFormData={setFormData}
            setErrors={setErrors}
            errors={errors}
          />

          {/* Next / Preview Buttons */}
          <div className="flex justify-between mt-6">
            <button
              onClick={() => (isLastStep ? handleSubmit() : handleNext())}
              className="px-8 w-[45%] py-2 bg-black text-white rounded-lg shadow hover:bg-gray-800"
            >
              {isLastStep ? "Submit" : "Next"}
            </button>
            <button className="px-8 w-[45%] py-2 bg-black text-white rounded-lg shadow hover:bg-gray-800">
              Preview
            </button>
          </div>
        </div>

        {/* RIGHT PREVIEW */}
        {showPreview && (
          <div className="relative bg-gray-100 w-full lg:w-1/2 lg:h-full  rounded-xl shadow p-5 overflow-y-auto">
            <div className="flex items-center justify-between">
              <div>
                <div>
                  <img src="/logo.svg" className="w-20 h-20" alt="" />
                </div>

                <div className="mt-4">
                  <p className="font-semibold">
                    Invoice Number :{" "}
                    <span className="font-normal">INV-04568</span>
                  </p>
                  <p className="font-semibold">
                    Date Issued :{" "}
                    <span className="font-normal">Nov 01, 2025</span>
                  </p>
                  <p className="font-semibold">
                    Due Date : <span className="font-normal">Nov 10, 2025</span>
                  </p>
                </div>
              </div>
              <div className="text-right text-sm space-y-2">
                <p>19th Street, Mckinney Walker</p>
                <p>Jaddah</p>
                <p>+1-0281-856-6521</p>
                <p className="font-semibold">Thomas Shelby</p>
                <p>thomasshelby@gmail.com</p>
                <p>Houston, Texas</p>
                <p>07526</p>
              </div>
            </div>

            <hr className="my-4" />

            <div>
              <p className="font-semibold">Project Description :</p>
              <p className="text-gray-600 mt-1">
                Add a brief and concise description of the project, item, or
                service here.
              </p>
            </div>

            <div className="absolute bottom-2 right-2">
              <img src="/aiIcon.svg" alt="" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quotation;
