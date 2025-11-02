import React from "react";

const mockUser = {
  name: "Ayush Mehra",
  email: "ayush@example.com",
  plan: "Gold",
  memberSince: "Feb 2024",
};

export default function Profile() {
  return (
    <main className="min-h-screen bg-blue-50 flex justify-center items-center">
      <div className="bg-white shadow-lg p-10 rounded-2xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">My Profile</h2>
        <div className="mb-3 flex flex-col items-center">
          <div className="w-20 h-20 rounded-full bg-blue-300 text-4xl flex items-center justify-center mb-2">
            {mockUser.name.charAt(0)}
          </div>
          <div className="font-medium text-lg">{mockUser.name}</div>
          <div className="text-gray-500 text-sm">{mockUser.email}</div>
        </div>
        <div className="mt-4">
          <div className="bg-blue-100 px-4 py-2 rounded mb-2 font-medium">Plan: {mockUser.plan}</div>
          <div className="bg-yellow-50 px-4 py-2 rounded font-medium">Member Since: {mockUser.memberSince}</div>
        </div>
        <button className="mt-6 w-full py-2 bg-indigo-500 text-white rounded-xl font-bold hover:bg-indigo-700 transition">Edit Profile</button>
      </div>
    </main>
  );
}
