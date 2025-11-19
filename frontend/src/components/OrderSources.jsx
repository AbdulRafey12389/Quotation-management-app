import React from "react";
import { AlertCircle } from "lucide-react";

const OrderSources = ({ formData, setFormData, errors, setErrors }) => {
  const commonClass =
    "w-full mt-1 px-3 py-1.5 border-2 border-gray-300 rounded-lg bg-gray-50 outline-none";

  return (
    <form className="space-y-3">
      {/* Order Source + Order Date */}
      <div className="grid grid-cols-2 gap-3">
        <div className="relative">
          <label className="font-medium text-sm">Order Sources</label>
          <input
            type="text"
            className={`${commonClass} ${
              errors.orderSource ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Website"
            value={formData.orderSource || ""}
            onChange={(e) => {
              setFormData({ ...formData, orderSource: e.target.value });
              if (errors.orderSource) setErrors({ ...errors, orderSource: "" });
            }}
          />
          {errors.orderSource && (
            <>
              <AlertCircle className="absolute right-3 top-[2.45rem] text-red-500 w-4 h-4 animate-slideIn" />
              <p className="text-red-600 text-[12px] mt-1 animate-fadeIn">
                {errors.orderSource}
              </p>
            </>
          )}
        </div>

        <div className="relative">
          <label className="font-medium text-sm">Order Date</label>
          <input
            type="date"
            className={`${commonClass} ${
              errors.orderDate ? "border-red-500" : "border-gray-300"
            }`}
            value={formData.orderDate || "2025-11-01"}
            onChange={(e) => {
              setFormData({ ...formData, orderDate: e.target.value });
              if (errors.orderDate) setErrors({ ...errors, orderDate: "" });
            }}
          />
          {errors.orderDate && (
            <>
              <AlertCircle className="absolute right-3 top-[2.45rem] text-red-500 w-4 h-4 animate-slideIn" />
              <p className="text-red-600 text-[12px] mt-1 animate-fadeIn">
                {errors.orderDate}
              </p>
            </>
          )}
        </div>
      </div>

      {/* Delivery Address */}
      <div className="relative">
        <label className="font-medium text-sm">Delivery Address</label>
        <input
          type="text"
          className={`${commonClass} ${
            errors.deliveryAddress ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Ex. 123 901 Bagby, between McKinney and Walker, Houston Street, Los Angeles, USA"
          value={formData.deliveryAddress || ""}
          onChange={(e) => {
            setFormData({ ...formData, deliveryAddress: e.target.value });
            if (errors.deliveryAddress)
              setErrors({ ...errors, deliveryAddress: "" });
          }}
        />
        {errors.deliveryAddress && (
          <>
            <AlertCircle className="absolute right-3 top-[2.45rem] text-red-500 w-4 h-4 animate-slideIn" />
            <p className="text-red-600 text-[12px] mt-1 animate-fadeIn">
              {errors.deliveryAddress}
            </p>
          </>
        )}
      </div>

      {/* Issue Date + Due Date */}
      <div className="grid grid-cols-2 gap-4">
        <div className="relative">
          <label className="font-medium text-sm">Issue Date</label>
          <input
            type="date"
            className={`${commonClass} ${
              errors.issueDate ? "border-red-500" : "border-gray-300"
            }`}
            value={formData.issueDate || "2025-11-01"}
            onChange={(e) => {
              setFormData({ ...formData, issueDate: e.target.value });
              if (errors.issueDate) setErrors({ ...errors, issueDate: "" });
            }}
          />
          {errors.issueDate && (
            <>
              <AlertCircle className="absolute right-3 top-[2.45rem] text-red-500 w-4 h-4 animate-slideIn" />
              <p className="text-red-600 text-[12px] mt-1 animate-fadeIn">
                {errors.issueDate}
              </p>
            </>
          )}
        </div>

        <div className="relative">
          <label className="font-medium text-sm">Due Date</label>
          <input
            type="date"
            className={`${commonClass} ${
              errors.dueDate ? "border-red-500" : "border-gray-300"
            }`}
            value={formData.dueDate || "2025-11-10"}
            onChange={(e) => {
              setFormData({ ...formData, dueDate: e.target.value });
              if (errors.dueDate) setErrors({ ...errors, dueDate: "" });
            }}
          />
          {errors.dueDate && (
            <>
              <AlertCircle className="absolute right-3 top-[2.45rem] text-red-500 w-4 h-4 animate-slideIn" />
              <p className="text-red-600 text-[12px] mt-1 animate-fadeIn">
                {errors.dueDate}
              </p>
            </>
          )}
        </div>
      </div>

      {/* Payment Method + Advance */}
      <div className="grid grid-cols-2 gap-4">
        <div className="relative">
          <label className="font-medium text-sm">Payment Method</label>
          <select
            className={`${commonClass} ${
              errors.paymentMethod ? "border-red-500" : "border-gray-300"
            }`}
            value={formData.paymentMethod || "Cheque"}
            onChange={(e) => {
              setFormData({ ...formData, paymentMethod: e.target.value });
              if (errors.paymentMethod)
                setErrors({ ...errors, paymentMethod: "" });
            }}
          >
            <option>Cheque</option>
            <option>Cash</option>
            <option>Bank Transfer</option>
          </select>
          {errors.paymentMethod && (
            <>
              <AlertCircle className="absolute right-3 top-[2.45rem] text-red-500 w-4 h-4 animate-slideIn" />
              <p className="text-red-600 text-[12px] mt-1 animate-fadeIn">
                {errors.paymentMethod}
              </p>
            </>
          )}
        </div>

        <div className="relative">
          <label className="font-medium text-sm">Advance</label>
          <input
            type="text"
            className={`${commonClass} ${
              errors.advance ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="30% Mandatory"
            value={formData.advance || ""}
            onChange={(e) => {
              setFormData({ ...formData, advance: e.target.value });
              if (errors.advance) setErrors({ ...errors, advance: "" });
            }}
          />
          {errors.advance && (
            <>
              <AlertCircle className="absolute right-3 top-[2.45rem] text-red-500 w-4 h-4 animate-slideIn" />
              <p className="text-red-600 text-[12px] mt-1 animate-fadeIn">
                {errors.advance}
              </p>
            </>
          )}
        </div>
      </div>

      {/* Terms & Conditions */}
      <div className="relative">
        <label className="font-medium text-sm">Terms & Condition</label>
        <input
          type="text"
          className={`${commonClass} ${
            errors.terms ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Type Special Note"
          value={formData.terms || ""}
          onChange={(e) => {
            setFormData({ ...formData, terms: e.target.value });
            if (errors.terms) setErrors({ ...errors, terms: "" });
          }}
        />
        {errors.terms && (
          <>
            <AlertCircle className="absolute right-3 top-[2.45rem] text-red-500 w-4 h-4 animate-slideIn" />
            <p className="text-red-600 text-[12px] mt-1 animate-fadeIn">
              {errors.terms}
            </p>
          </>
        )}
      </div>
    </form>
  );
};

export default OrderSources;
