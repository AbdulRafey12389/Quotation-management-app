import React from "react";
import { Edit, Trash2, Send, MoreHorizontal } from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Quotation",
      value: "12",
      change: "+2%",
      description: "vs last week",
      icon: "🗂",
    },
    {
      title: "Pending Quotation",
      value: "25%",
      change: "+2%",
      description: "vs last week",
      icon: "⏳",
    },
    {
      title: "New Clients",
      value: "230",
      change: "+24%",
      description: "vs last week",
      icon: "👤",
    },
  ];

  const quotations = [
    { id: 1, client: "Smith Jones", date: "Jan.02.2025", amount: "$230" },
    { id: 2, client: "Victoria Roy", date: "Feb.05.2025", amount: "$340" },
    { id: 3, client: "Liam James", date: "Feb.06.2025", amount: "$550" },
    { id: 4, client: "David Liam", date: "Feb.07.2025", amount: "$666" },
    { id: 5, client: "Robert Kevin", date: "Feb.08.2025", amount: "$800" },
    { id: 6, client: "Michael Roy", date: "Feb.09.2025", amount: "$1200" },
    { id: 7, client: "Lucas Roy", date: "Feb.10.2025", amount: "$1400" },
  ];

  return (
    <div className="p-6 bg-white min-h-screen">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
          Welcome Martin Brown, <span>👋</span>
        </h1>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white shadow-sm rounded-xl border border-gray-200 p-6 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">{stat.icon}</span>
              <h3 className="text-lg font-semibold text-gray-900">
                {stat.title}
              </h3>
            </div>
            <div className="flex items-end gap-2 mb-1">
              <span className="text-4xl font-bold text-gray-900">
                {stat.value}
              </span>
              <span className="text-green-600 text-sm font-medium">
                {stat.change}
              </span>
            </div>
            <p className="text-gray-500 text-sm">{stat.description}</p>
          </div>
        ))}
      </div>

      {/* Recent Quotation Title */}
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-900">Recent Quotation</h2>
        <span className="text-blue-600 font-medium cursor-pointer">
          View all
        </span>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="min-w-[950px]">
          {/* Table Header */}
          <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
            <div className="grid grid-cols-7 gap-4 text-sm font-semibold text-gray-700">
              <div>#</div>
              <div className="col-span-2">Clients Name</div>
              <div>Date</div>
              <div>Total Amount</div>
              <div>Status</div>
              <div>Action</div>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-200">
            {quotations.map((q) => (
              <div
                key={q.id}
                className="px-6 py-4 grid grid-cols-7 gap-4 items-center text-sm hover:bg-gray-50"
              >
                <div>{q.id}</div>
                <div className="col-span-2 font-medium text-gray-900">
                  {q.client}
                </div>
                <div className="text-gray-600">{q.date}</div>
                <div className="font-semibold">{q.amount}</div>

                {/* Status Badge */}
                <div>
                  <span className="px-3 py-1 text-green-700 bg-green-100 rounded-full text-xs font-medium">
                    Sent
                  </span>
                </div>

                {/* Action Icons */}
                <div className="flex gap-3 text-gray-700">
                  <Edit
                    size={18}
                    className="cursor-pointer hover:text-blue-600"
                  />
                  <Trash2
                    size={18}
                    className="cursor-pointer hover:text-red-600"
                  />
                  <Send
                    size={18}
                    className="cursor-pointer hover:text-green-600"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
