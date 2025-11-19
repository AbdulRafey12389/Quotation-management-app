import React from "react";
import { AlertCircle } from "lucide-react";

const AddProduct = ({ formData, setFormData, errors, setErrors }) => {
  return (
    <form className="space-y-4">
      {/* Product Name / Category */}
      <div className="grid grid-cols-2 gap-4">
        <div className="relative">
          <label className="font-medium text-sm">Product Name</label>
          <input
            type="text"
            value={formData.productName}
            onChange={(e) => {
              setFormData({ ...formData, productName: e.target.value });
              if (errors.productName) setErrors({ ...errors, productName: "" });
            }}
            className={`w-full mt-1 px-3 py-1.5 border-2 rounded-lg bg-gray-50 
              ${errors.productName ? "border-red-500" : "border-gray-300"}
            `}
            placeholder="Mixing Paddles"
          />
          {errors.productName && (
            <>
              <AlertCircle className="absolute right-3 top-[2.45rem] text-red-500 w-4 h-4 animate-slideIn" />
              <p className="text-red-600 text-[12px] mt-1 animate-fadeIn">
                {errors.productName}
              </p>
            </>
          )}
        </div>

        <div className="relative">
          <label className="font-medium text-sm">Category</label>
          <input
            type="text"
            value={formData.category}
            onChange={(e) => {
              setFormData({ ...formData, category: e.target.value });
              if (errors.category) setErrors({ ...errors, category: "" });
            }}
            className={`w-full mt-1 px-3 py-1.5 border-2 rounded-lg bg-gray-50 
              ${errors.category ? "border-red-500" : "border-gray-300"}
            `}
            placeholder="Construction"
          />
          {errors.category && (
            <>
              <AlertCircle className="absolute right-3 top-[2.45rem] text-red-500 w-4 h-4 animate-slideIn" />
              <p className="text-red-600 text-[12px] mt-1 animate-fadeIn">
                {errors.category}
              </p>
            </>
          )}
        </div>
      </div>

      {/* Unit Measure / Quantity */}
      <div className="grid grid-cols-2 gap-4">
        <div className="relative">
          <label className="font-medium text-sm">Unit Measure</label>
          <input
            type="text"
            value={formData.unitMeasure}
            onChange={(e) => {
              setFormData({ ...formData, unitMeasure: e.target.value });
              if (errors.unitMeasure) setErrors({ ...errors, unitMeasure: "" });
            }}
            className={`w-full mt-1 px-3 py-1.5 border-2 rounded-lg bg-gray-50 
              ${errors.unitMeasure ? "border-red-500" : "border-gray-300"}
            `}
            placeholder="Pcs"
          />
          {errors.unitMeasure && (
            <>
              <AlertCircle className="absolute right-3 top-[2.45rem] text-red-500 w-4 h-4 animate-slideIn" />
              <p className="text-red-600 text-[12px] mt-1 animate-fadeIn">
                {errors.unitMeasure}
              </p>
            </>
          )}
        </div>

        <div className="relative">
          <label className="font-medium text-sm">Quantity</label>
          <input
            type="number"
            value={formData.quantity}
            onChange={(e) => {
              setFormData({ ...formData, quantity: e.target.value });
              if (errors.quantity) setErrors({ ...errors, quantity: "" });
            }}
            className={`w-full mt-1 px-3 py-1.5 border-2 rounded-lg bg-gray-50 
              ${errors.quantity ? "border-red-500" : "border-gray-300"}
            `}
            placeholder="15"
          />
          {errors.quantity && (
            <>
              <AlertCircle className="absolute right-3 top-[2.45rem] text-red-500 w-4 h-4 animate-slideIn" />
              <p className="text-red-600 text-[12px] mt-1 animate-fadeIn">
                {errors.quantity}
              </p>
            </>
          )}
        </div>
      </div>

      {/* City / Phone Number */}
      <div className="grid grid-cols-2 gap-4">
        <div className="relative">
          <label className="font-medium text-sm">City</label>
          <input
            type="text"
            value={formData.cityProduct}
            onChange={(e) => {
              setFormData({ ...formData, cityProduct: e.target.value });
              if (errors.cityProduct) setErrors({ ...errors, cityProduct: "" });
            }}
            className={`w-full mt-1 px-3 py-1.5 border-2 rounded-lg bg-gray-50 
              ${errors.cityProduct ? "border-red-500" : "border-gray-300"}
            `}
            placeholder="Houston"
          />
          {errors.cityProduct && (
            <>
              <AlertCircle className="absolute right-3 top-[2.45rem] text-red-500 w-4 h-4 animate-slideIn" />
              <p className="text-red-600 text-[12px] mt-1 animate-fadeIn">
                {errors.cityProduct}
              </p>
            </>
          )}
        </div>

        <div className="relative">
          <label className="font-medium text-sm">Phone Number</label>
          <input
            type="text"
            value={formData.phoneProduct}
            onChange={(e) => {
              setFormData({ ...formData, phoneProduct: e.target.value });
              if (errors.phoneProduct)
                setErrors({ ...errors, phoneProduct: "" });
            }}
            className={`w-full mt-1 px-3 py-1.5 border-2 rounded-lg bg-gray-50 
              ${errors.phoneProduct ? "border-red-500" : "border-gray-300"}
            `}
            placeholder="+1-281-658-5421"
          />
          {errors.phoneProduct && (
            <>
              <AlertCircle className="absolute right-3 top-[2.45rem] text-red-500 w-4 h-4 animate-slideIn" />
              <p className="text-red-600 text-[12px] mt-1 animate-fadeIn">
                {errors.phoneProduct}
              </p>
            </>
          )}
        </div>
      </div>

      {/* Unit Price / Discount Applied */}
      <div className="grid grid-cols-2 gap-4">
        <div className="relative">
          <label className="font-medium text-sm">Unit Price</label>
          <input
            type="number"
            value={formData.unitPrice}
            onChange={(e) => {
              setFormData({ ...formData, unitPrice: e.target.value });
              if (errors.unitPrice) setErrors({ ...errors, unitPrice: "" });
            }}
            className={`w-full mt-1 px-3 py-1.5 border-2 rounded-lg bg-gray-50 
              ${errors.unitPrice ? "border-red-500" : "border-gray-300"}
            `}
            placeholder="15.00$"
          />
          {errors.unitPrice && (
            <>
              <AlertCircle className="absolute right-3 top-[2.45rem] text-red-500 w-4 h-4 animate-slideIn" />
              <p className="text-red-600 text-[12px] mt-1 animate-fadeIn">
                {errors.unitPrice}
              </p>
            </>
          )}
        </div>

        <div className="relative">
          <label className="font-medium text-sm">Discount Applied</label>
          <input
            type="text"
            value={formData.discountApplied}
            onChange={(e) => {
              setFormData({ ...formData, discountApplied: e.target.value });
              if (errors.discountApplied)
                setErrors({ ...errors, discountApplied: "" });
            }}
            className={`w-full mt-1 px-3 py-1.5 border-2 rounded-lg bg-gray-50 
              ${errors.discountApplied ? "border-red-500" : "border-gray-300"}
            `}
            placeholder="8%"
          />
          {errors.discountApplied && (
            <>
              <AlertCircle className="absolute right-3 top-[2.45rem] text-red-500 w-4 h-4 animate-slideIn" />
              <p className="text-red-600 text-[12px] mt-1 animate-fadeIn">
                {errors.discountApplied}
              </p>
            </>
          )}
        </div>
      </div>

      {/* Tax Applied */}
      <div className="relative max-w-[calc(50%-8px)]">
        <label className="font-medium text-sm">Tax Applied</label>
        <input
          type="text"
          value={formData.taxApplied}
          onChange={(e) => {
            setFormData({ ...formData, taxApplied: e.target.value });
            if (errors.taxApplied) setErrors({ ...errors, taxApplied: "" });
          }}
          className={`w-full mt-1 px-3 py-1.5 border-2 rounded-lg bg-gray-50 
            ${errors.taxApplied ? "border-red-500" : "border-gray-300"}
          `}
          placeholder="2%"
        />
        {errors.taxApplied && (
          <>
            <AlertCircle className="absolute right-3 top-[2.45rem] text-red-500 w-4 h-4 animate-slideIn" />
            <p className="text-red-600 text-[12px] mt-1 animate-fadeIn">
              {errors.taxApplied}
            </p>
          </>
        )}
      </div>

      <p>To add more products, click the Add Product button.</p>

      <button
        type="button"
        onClick={null}
        className="w-full bg-blue-600 text-white py-2 rounded-lg mt-3"
      >
        Add Product
      </button>
    </form>
  );
};

export default AddProduct;
