import React from "react";
import { FiUsers, FiTrendingUp, FiDollarSign, FiUserCheck } from "react-icons/fi";

const stats = [
  { label: "Total Members", value: 142, color: "bg-blue-100 text-blue-600", icon: <FiUsers size={40} /> },
  { label: "Active Plans", value: 95, color: "bg-green-100 text-green-600", icon: <FiUserCheck size={40} /> },
  { label: "Trainers", value: 7, color: "bg-yellow-100 text-yellow-700", icon: <FiTrendingUp size={40} /> },
  { label: "Revenue This Month", value: "₹78,200", color: "bg-purple-100 text-purple-700", icon: <FiDollarSign size={40} /> },
];

export default function AdminDashboard() {
  // Example interactive function
  const showAction = msg => alert(msg);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-10">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-gray-900 drop-shadow">Admin Dashboard</h1>
      <section className="grid md:grid-cols-4 sm:grid-cols-2 gap-8 px-8 max-w-5xl mx-auto mb-10">
        {stats.map((s, i) => (
          <div
            key={i}
            className={`rounded-2xl shadow-lg p-7 text-center transform hover:scale-105 transition-all duration-300 cursor-pointer ${s.color}`}
            onClick={() => showAction(`Clicked: ${s.label}`)}
          >
            <div className="mb-3 flex justify-center">{s.icon}</div>
            <div className="text-3xl font-bold mb-1">{s.value}</div>
            <div className="text-lg font-medium">{s.label}</div>
          </div>
        ))}
      </section>
      <div className="flex flex-wrap justify-center gap-8">
        <button
          className="px-8 py-3 rounded-lg bg-blue-600 text-white font-bold hover:bg-blue-800 transition-shadow shadow-md hover:shadow-lg"
          onClick={() => showAction('Manage Memberships')}
          title="View and manage all membership plans"
        >Manage Memberships</button>
        <button
          className="px-8 py-3 rounded-lg bg-green-500 text-white font-bold hover:bg-green-700 transition-shadow shadow-md hover:shadow-lg"
          onClick={() => showAction('Approve Payments')}
          title="Review and approve pending payments"
        >Approve Payments</button>
        <button
          className="px-8 py-3 rounded-lg bg-indigo-500 text-white font-bold hover:bg-indigo-700 transition-shadow shadow-md hover:shadow-lg"
          onClick={() => showAction('Analytics & Reports')}
          title="View analytics and export reports"
        >Analytics & Reports</button>
      </div>
    </main>
  );
}
