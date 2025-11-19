import { CircleCheck, Clock, FileCodeCorner, FileXCorner } from "lucide-react";
import React from "react";

const ViewHistory = () => {
  const stats = [
    {
      title: "Total Quotation",
      value: "12",
      description: "All quotations till now",
      color: "text-green-600",
      icon: <FileCodeCorner size={17} className="text-blue-500" />,
    },
    {
      title: "Approved",
      value: "25",
      description: "Successfully approved",
      color: "text-green-600",
      icon: <CircleCheck size={17} className="text-green-600" />,
    },
    {
      title: "Pending",
      value: "08",
      description: "Waiting for review",
      color: "text-yellow-600",
      icon: <Clock size={17} className="text-red-600" />,
    },
    {
      title: "Reject",
      value: "02",
      description: "Declined quotations",
      color: "text-red-600",
      icon: <FileXCorner size={17} className="text-red-400" />,
    },
  ];

  const quotations = [
    {
      id: "Q - 125",
      date: "12 Nov 2025",
      amount: "200,000",
      status: "Approved",
    },
    {
      id: "Q - 124",
      date: "08 Nov 2025",
      amount: "150,000",
      status: "Approved",
    },
    {
      id: "Q - 123",
      date: "02 Nov 2025",
      amount: "350,000",
      status: "Pending",
    },
    {
      id: "Q - 122",
      date: "28 Oct 2025",
      amount: "50,000",
      status: "Approved",
    },
    {
      id: "Q - 121",
      date: "25 Oct 2025",
      amount: "145,000",
      status: "Pending",
    },
    {
      id: "Q - 120",
      date: "23 Oct 2025",
      amount: "245,000",
      status: "Approved",
    },
    {
      id: "Q - 119",
      date: "20 Oct 2025",
      amount: "195,000",
      status: "Pending",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Approved":
        return "text-green-700 bg-green-100";
      case "Pending":
        return "text-yellow-700 bg-yellow-100";
      case "Reject":
        return "text-red-700 bg-red-100";
      default:
        return "text-gray-700 bg-gray-100";
    }
  };

  return (
    <div className="p-6 bg-white min-h-min">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
          >
            <div className="flex justify-start items-start mb-4 gap-2">
              <div className="w-8 h-8 flex place-items-center justify-center bg-gray-100 rounded-full">
                {stat.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mt-0.5 ">
                {stat.title}
              </h3>
            </div>
            <div>
              <span className={`text-xl font-bold ${stat.color}`}>
                {stat.value}
              </span>
            </div>
            <p className="text-gray-600 text-sm">{stat.description}</p>
          </div>
        ))}
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200  overflow-x-auto">
        <div className="min-w-[700px]">
          {" "}
          {/* ensures table has minimum width */}
          {/* Table Header */}
          <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
            <div className="grid grid-cols-12 gap-4 text-sm font-semibold text-gray-900">
              <div className="col-span-3">Quotation ID</div>
              <div className="col-span-2">Date</div>
              <div className="col-span-2">Amount</div>
              <div className="col-span-2">Status</div>
              <div className="col-span-2">Action</div>
              <div className="col-span-1">Edit</div>
            </div>
          </div>
          {/* Table Body */}
          <div className="divide-y divide-gray-200">
            {quotations.map((quotation, index) => (
              <div key={index} className="px-6 py-4 hover:bg-gray-50">
                <div className="grid grid-cols-12 gap-4 items-center text-sm">
                  <div className="col-span-3">
                    <span className="font-medium text-gray-900">
                      {quotation.id}
                    </span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-gray-600">{quotation.date}</span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-gray-900 font-medium">
                      {quotation.amount}
                    </span>
                  </div>
                  <div className="col-span-2">
                    <span
                      className={`font-medium px-2 py-1 rounded-lg ${getStatusColor(
                        quotation.status
                      )}`}
                    >
                      {quotation.status}
                    </span>
                  </div>
                  <div className="col-span-2">
                    <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                      View File
                    </button>
                  </div>
                  <div className="col-span-1">
                    <button className="text-gray-600 hover:text-gray-800 font-medium text-sm">
                      Edit File
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewHistory;
