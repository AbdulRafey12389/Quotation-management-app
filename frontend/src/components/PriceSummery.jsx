import React from "react";
import { AlertCircle } from "lucide-react";

const PriceSummary = ({ formData, setFormData, errors, setErrors }) => {
  const commonClass =
    "w-full mt-1 px-3 py-1.5 border-2 border-gray-300 rounded-lg bg-gray-50 outline-none text-gray-700";

  return (
    <form className="space-y-4">
      {/* Sub Total / Total Discount Applied */}
      <div className="grid grid-cols-2 gap-4">
        <div className="relative">
          <label className="font-medium text-sm">Sub Total</label>
          <input
            type="text"
            className={`${commonClass} ${
              errors.subTotal ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Add Calculated"
            value={formData.subTotal || ""}
           
            onChange={(e) => {
              setFormData({ ...formData, subTotal: e.target.value });
              if (errors.subTotal) setErrors({ ...errors, subTotal: "" });
            }}
          />
          {errors.subTotal && (
            <>
              <AlertCircle className="absolute right-3 top-[2.45rem] text-red-500 w-4 h-4 animate-slideIn" />
              <p className="text-red-600 text-[12px] mt-1 animate-fadeIn">
                {errors.subTotal}
              </p>
            </>
          )}
        </div>

        <div className="relative">
          <label className="font-medium text-sm">Total Discount Applied</label>
          <input
            type="text"
            className={`${commonClass} ${
              errors.totalDiscount ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Add Calculated"
            value={formData.totalDiscount || ""}
            
            onChange={(e) => {
              setFormData({ ...formData, totalDiscount: e.target.value });
              if (errors.totalDiscount)
                setErrors({ ...errors, totalDiscount: "" });
            }}
          />
          {errors.totalDiscount && (
            <>
              <AlertCircle className="absolute right-3 top-[2.45rem] text-red-500 w-4 h-4 animate-slideIn" />
              <p className="text-red-600 text-[12px] mt-1 animate-fadeIn">
                {errors.totalDiscount}
              </p>
            </>
          )}
        </div>
      </div>

      {/* Total Tax Applied / Grand Total */}
      <div className="grid grid-cols-2 gap-4">
        <div className="relative">
          <label className="font-medium text-sm">Total Tax Applied</label>
          <input
            type="text"
            className={`${commonClass} ${
              errors.totalTax ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Add Calculated"
            value={formData.totalTax || ""}
            
            onChange={(e) => {
              setFormData({ ...formData, totalTax: e.target.value });
              if (errors.totalTax) setErrors({ ...errors, totalTax: "" });
            }}
          />
          {errors.totalTax && (
            <>
              <AlertCircle className="absolute right-3 top-[2.45rem] text-red-500 w-4 h-4 animate-slideIn" />
              <p className="text-red-600 text-[12px] mt-1 animate-fadeIn">
                {errors.totalTax}
              </p>
            </>
          )}
        </div>

        <div className="relative">
          <label className="font-medium text-sm">Grand Total</label>
          <input
            type="text"
            className={`${commonClass} font-bold text-gray-800 ${
              errors.grandTotal ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Add Calculated"
            value={formData.grandTotal || ""}
            
            onChange={(e) => {
              setFormData({ ...formData, grandTotal: e.target.value });
              if (errors.grandTotal) setErrors({ ...errors, grandTotal: "" });
            }}
          />
          {errors.grandTotal && (
            <>
              <AlertCircle className="absolute right-3 top-[2.45rem] text-red-500 w-4 h-4 animate-slideIn" />
              <p className="text-red-600 text-[12px] mt-1 animate-fadeIn">
                {errors.grandTotal}
              </p>
            </>
          )}
        </div>
      </div>
    </form>
  );
};

export default PriceSummary;
