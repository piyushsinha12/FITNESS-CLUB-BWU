import React, { useEffect, useState } from "react";
import api from "../services/api";

const MembershipCard = ({ plan }) => {
  return (
    <div className="max-w-xs w-full rounded-2xl shadow-lg bg-white border border-gray-200 p-8 m-4 transform transition hover:scale-105 hover:shadow-2xl">
      <h2 className="text-xl font-semibold mb-2 text-gray-900">{plan.name}</h2>
      <div className="text-3xl font-bold mb-2 text-blue-700">₹{plan.price}</div>
      <div className="text-sm text-gray-500 mb-4">{plan.duration}</div>
      <ul className="mb-4 list-disc list-inside text-gray-600 text-sm">
        {plan.features.map((feature, idx) => (
          <li key={idx}>{feature}</li>
        ))}
      </ul>
      <button className="w-full py-2 px-3 bg-gradient-to-r from-green-400 to-green-600 text-white font-bold rounded-lg shadow hover:bg-green-700 transition">
        Join Now
      </button>
    </div>
  );
};

const Memberships = () => {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/memberships")
      .then((res) => {
        setPlans(res.data);
        setLoading(false);
      })
      .catch(console.error);
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 py-10">
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">Membership Plans</h2>
      {loading ? (
        <div className="text-center py-12">Loading...</div>
      ) : (
        <div className="flex flex-wrap justify-center gap-8">
          {plans.map((plan) => (
            <MembershipCard key={plan._id} plan={plan} />
          ))}
        </div>
      )}
    </main>
  );
};

export default Memberships;
