import React from "react";
import { AlertCircle } from "lucide-react";

const CustomerDetail = ({ formData, setFormData, errors, setErrors }) => {
  return (
    <form className="space-y-4">
      {/* Customer + Company */}
      <div className="grid grid-cols-2 gap-2">
        {/* Customer Name */}
        <div className="relative">
          <label className="font-medium text-sm">Customer Name</label>
          <input
            type="text"
            value={formData.customerName}
            onChange={(e) => {
              setFormData({ ...formData, customerName: e.target.value });
              if (errors.customerName)
                setErrors({ ...errors, customerName: "" });
            }}
            className={`w-full mt-1 px-3 py-1.5 border-2 outline-none rounded-lg bg-gray-50 
              ${errors.customerName ? "border-red-500" : "border-gray-300"}
            `}
            placeholder="Brown Martin"
          />

          {errors.customerName && (
            <>
              <AlertCircle className="absolute right-3 top-[2.45rem] text-red-500 w-4 h-4 animate-slideIn" />
              <p className="text-red-600 text-[12px] mt-1 animate-fadeIn">
                {errors.customerName}
              </p>
            </>
          )}
        </div>

        {/* Company Name */}
        <div className="relative">
          <label className="font-medium text-sm">Company Name</label>
          <input
            type="text"
            value={formData.companyName}
            onChange={(e) => {
              setFormData({ ...formData, companyName: e.target.value });
              if (errors.companyName) setErrors({ ...errors, companyName: "" });
            }}
            className={`w-full mt-1 px-3 py-1.5 border-2  outline-none rounded-lg bg-gray-50 
              ${errors.companyName ? "border-red-500" : "border-gray-300"}
            `}
            placeholder="Digital Thermal"
          />
          {errors.companyName && (
            <>
              <AlertCircle className="absolute right-3 top-[2.45rem] animate-slideIn text-red-500 w-4 h-4" />
              <p className="text-red-600 text-[12px] mt-1 animate-fadeIn">
                {errors.companyName}
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
          value={formData.address}
          onChange={(e) => {
            setFormData({ ...formData, address: e.target.value });
            if (errors.address) setErrors({ ...errors, address: "" });
          }}
          className={`w-full mt-1 px-3 py-1.5 border-2 outline-none rounded-lg bg-gray-50 
            ${errors.address ? "border-red-500" : "border-gray-300"}
          `}
          placeholder="901 Bagby, Houston"
        />
        {errors.address && (
          <>
            <AlertCircle className="absolute right-3 top-[2.45rem] animate-slideIn text-red-500 w-4 h-4" />
            <p className="text-red-600 text-[12px] mt-1 animate-fadeIn">
              {errors.address}
            </p>
          </>
        )}
      </div>

      {/* ⭐ City + State + Postal Code */}
      <div className="grid grid-cols-3 gap-3">
        {/* City */}
        <div className="relative">
          <label className="font-medium text-sm">City</label>
          <input
            type="text"
            value={formData.city}
            onChange={(e) => {
              setFormData({ ...formData, city: e.target.value });
              if (errors.city) setErrors({ ...errors, city: "" });
            }}
            className={`w-full mt-1 px-3 py-1.5 border-2 outline-none rounded-lg bg-gray-50 
              ${errors.city ? "border-red-500" : "border-gray-300"}
            `}
            placeholder="Houston"
          />
          {errors.city && (
            <>
              <AlertCircle className="absolute right-3 top-[2.45rem] animate-slideIn text-red-500 w-4 h-4" />
              <p className="text-red-600 text-[12px] mt-1 animate-fadeIn">
                {errors.city}
              </p>
            </>
          )}
        </div>

        {/* State */}
        <div className="relative">
          <label className="font-medium text-sm">State</label>
          <input
            type="text"
            value={formData.state}
            onChange={(e) => {
              setFormData({ ...formData, state: e.target.value });
              if (errors.state) setErrors({ ...errors, state: "" });
            }}
            className={`w-full mt-1 px-3 py-1.5 border-2 outline-none rounded-lg bg-gray-50 
              ${errors.state ? "border-red-500" : "border-gray-300"}
            `}
            placeholder="Texas"
          />
          {errors.state && (
            <>
              <AlertCircle className="absolute right-3 top-[2.45rem] animate-slideIn text-red-500 w-4 h-4" />
              <p className="text-red-600 text-[12px] mt-1 animate-fadeIn">
                {errors.state}
              </p>
            </>
          )}
        </div>

        {/* Postal Code */}
        <div className="relative">
          <label className="font-medium text-sm">Postal Code</label>
          <input
            type="text"
            value={formData.postalCode}
            onChange={(e) => {
              setFormData({ ...formData, postalCode: e.target.value });
              if (errors.postalCode) setErrors({ ...errors, postalCode: "" });
            }}
            className={`w-full mt-1 px-3 py-1.5 border-2 outline-none rounded-lg bg-gray-50 
              ${errors.postalCode ? "border-red-500" : "border-gray-300"}
            `}
            placeholder="77002"
          />
          {errors.postalCode && (
            <>
              <AlertCircle className="absolute right-3 top-[2.45rem] animate-slideIn text-red-500 w-4 h-4" />
              <p className="text-red-600 text-[12px] mt-1 animate-fadeIn">
                {errors.postalCode}
              </p>
            </>
          )}
        </div>
      </div>

      {/* Email / Phone */}
      <div className="grid grid-cols-2 gap-3">
        {/* Email */}
        <div className="relative">
          <label className="font-medium text-sm">Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
              if (errors.email) setErrors({ ...errors, email: "" });
            }}
            className={`w-full mt-1 px-3 py-1.5 border-2 outline-none rounded-lg bg-gray-50 
              ${errors.email ? "border-red-500" : "border-gray-300"}
            `}
            placeholder="thomasshelby@gmail.com"
          />
          {errors.email && (
            <>
              <AlertCircle className="absolute right-3 animate-slideIn top-[2.45rem] text-red-500 w-4 h-4" />
              <p className="text-red-600 text-[12px] mt-1 animate-fadeIn">
                {errors.email}
              </p>
            </>
          )}
        </div>

        {/* Phone */}
        <div className="relative">
          <label className="font-medium text-sm">Phone Number</label>
          <input
            type="text"
            value={formData.phone}
            onChange={(e) => {
              setFormData({ ...formData, phone: e.target.value });
              if (errors.phone) setErrors({ ...errors, phone: "" });
            }}
            className={`w-full mt-1 px-3 py-1.5 border-2 outline-none rounded-lg bg-gray-50 
              ${errors.phone ? "border-red-500" : "border-gray-300"}
            `}
            placeholder="+1-281-658-5421"
          />

          {errors.phone && (
            <>
              <AlertCircle className="absolute right-3 top-[2.45rem] animate-slideIn text-red-500 w-4 h-4" />
              <p className="text-red-600 text-[12px] outline-none mt-1 animate-fadeIn">
                {errors.phone}
              </p>
            </>
          )}
        </div>
      </div>

      {/* Special Instructions */}
      <div className="relative">
        <label className="font-medium text-sm">Special Instructions</label>
        <input
          type="text"
          value={formData.specialInstruction}
          onChange={(e) => {
            setFormData({
              ...formData,
              specialInstruction: e.target.value,
            });
            if (errors.specialInstruction)
              setErrors({ ...errors, specialInstruction: "" });
          }}
          className={`w-full mt-1 px-3 py-1.5 border-2 outline-none rounded-lg bg-gray-50 
            ${errors.specialInstruction ? "border-red-500" : "border-gray-300"}
          `}
          placeholder="e.g., Leave at the door"
        />
        {errors.specialInstruction && (
          <>
            <AlertCircle className="absolute right-3 top-[2.45rem] animate-slideIn text-red-500 w-4 h-4" />
            <p className="text-red-600 text-[12px] mt-1 animate-fadeIn">
              {errors.specialInstruction}
            </p>
          </>
        )}
      </div>
    </form>
  );
};

export default CustomerDetail;
