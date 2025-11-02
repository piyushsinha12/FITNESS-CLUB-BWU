import React from "react";

const MembershipCard = ({ plan }) => (
  <div className="card m-2" style={{ width: '18rem' }}>
    <div className="card-body">
      <h5 className="card-title">{plan.plan_name}</h5>
      <p className="card-text">Duration: {plan.duration}</p>
      <p className="card-text">Price: ₹{plan.price}</p>
      <p className="card-text">Classes Per Month: {plan.plan_limits.classes_per_month}</p>
      <p className="card-text">GST: {plan.gst}%</p>
    </div>
  </div>
);

export default MembershipCard;
