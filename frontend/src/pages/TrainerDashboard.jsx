import React from "react";

const fakeClasses = [
  { name: "Cardio Blast", time: "7:30 AM", members: 22 },
  { name: "HIIT Express", time: "10:00 AM", members: 15 },
  { name: "Strength Training", time: "6:00 PM", members: 18 },
];

export default function TrainerDashboard() {
  return (
    <main className="min-h-screen bg-indigo-50 py-10">
      <h1 className="text-4xl font-bold text-center mb-6 text-indigo-900">Trainer Dashboard 🏋️‍♂️</h1>
      <div className="mx-auto max-w-3xl">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-800">Today's Classes</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {fakeClasses.map((cls, i) => (
              <div key={i} className="p-6 rounded-xl bg-white shadow hover:scale-105 transition">
                <h3 className="text-xl font-bold text-indigo-700 mb-1">{cls.name}</h3>
                <div className="text-gray-500">🕓 {cls.time}</div>
                <div className="mt-2 text-sm text-green-700">{cls.members} members enrolled</div>
                <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded shadow hover:bg-indigo-700 transition">View Attendance</button>
              </div>
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-indigo-800">Quick Actions</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-green-500 hover:bg-green-600 px-6 py-3 font-bold text-white rounded-xl shadow transition">+ Add New Class</button>
            <button className="bg-blue-400 hover:bg-blue-600 px-6 py-3 font-bold text-white rounded-xl shadow transition">View Member Progress</button>
          </div>
        </section>
      </div>
    </main>
  );
}
