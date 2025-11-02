import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiUser, HiMail, HiLockClosed } from "react-icons/hi";

const Signup = () => {
    const [form, setForm] = useState({ name: "", email: "", password: "" });
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");
        try {
            const res = await fetch("http://localhost:5000/api/v1/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...form, role: "member" }),
            });
            if (res.ok) {
                setSuccess("Account created! Redirecting...");
                setTimeout(() => navigate("/login"), 1500);
            } else {
                const data = await res.json();
                setError(data.message || "Signup failed!");
            }
        } catch {
            setError("Something went wrong!");
        }
    };

    return (
        <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-tr from-blue-200 via-purple-100 to-indigo-200">
            <div className="bg-white/40 backdrop-blur-xl shadow-2xl rounded-3xl p-10 w-full max-w-md border border-white/40 text-center">
                <h1 className="text-4xl font-extrabold mb-6 text-blue-900 drop-shadow-sm">
                    Create Your Account
                </h1>

                <form onSubmit={handleSubmit} className="space-y-5 text-left">
                    <div className="relative">
                        <HiUser className="absolute left-3 top-3.5 text-blue-500" size={22} />
                        <input
                            name="name"
                            type="text"
                            placeholder="Full Name"
                            required
                            className="pl-10 pr-3 py-3 w-full border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 outline-none transition"
                            value={form.name}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="relative">
                        <HiMail className="absolute left-3 top-3.5 text-blue-500" size={22} />
                        <input
                            name="email"
                            type="email"
                            placeholder="Email"
                            required
                            className="pl-10 pr-3 py-3 w-full border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 outline-none transition"
                            value={form.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="relative">
                        <HiLockClosed className="absolute left-3 top-3.5 text-blue-500" size={22} />
                        <input
                            name="password"
                            type="password"
                            placeholder="Password"
                            required
                            minLength={6}
                            className="pl-10 pr-3 py-3 w-full border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 outline-none transition"
                            value={form.password}
                            onChange={handleChange}
                        />
                    </div>

                    {error && <p className="text-red-600 text-sm text-center">{error}</p>}
                    {success && <p className="text-green-600 text-sm text-center">{success}</p>}

                    <button
                        type="submit"
                        className="w-full bg-white/30 border border-white/50 text-blue-900 font-semibold py-3 rounded-xl backdrop-blur-sm 
             hover:bg-gradient-to-r hover:from-indigo-500 hover:to-blue-500 hover:text-white 
             transition-all duration-300 shadow-md hover:shadow-xl"
                    >
                        Create Account
                    </button>

                </form>

                <div className="text-center text-gray-600 text-sm mt-6">
                    Already have an account?{" "}
                    <span
                        onClick={() => navigate("/login")}
                        className="text-blue-700 font-semibold cursor-pointer hover:underline"
                    >
                        Log In
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Signup;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { HiUser, HiMail, HiLockClosed } from "react-icons/hi";

// const Signup = () => {
//   const [form, setForm] = useState({ name: "", email: "", password: "" });
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(""); setSuccess("");
//     try {
//       const res = await fetch("http://localhost:5000/api/v1/auth/signup", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ ...form, role: "member" }),
//       });
//       if (res.ok) {
//         setSuccess("Account created! Redirecting...");
//         setTimeout(() => navigate("/login"), 1500);
//       } else {
//         const data = await res.json();
//         setError(data.message || "Signup failed!");
//       }
//     } catch {
//       setError("Something went wrong!");
//     }
//   };

//   return (
//     <main className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-blue-200 via-purple-100 to-indigo-200 px-4">
//       <div className="relative bg-white/40 backdrop-blur-xl shadow-2xl rounded-3xl p-10 w-full max-w-md border border-white/40">
//         <h1 className="text-4xl font-extrabold mb-6 text-center text-blue-900 drop-shadow-sm">
//           Create Your Account
//         </h1>

//         <form onSubmit={handleSubmit} className="space-y-5">
//           <div className="relative">
//             <HiUser className="absolute left-3 top-3.5 text-blue-500" size={22} />
//             <input
//               name="name"
//               type="text"
//               placeholder="Full Name"
//               required
//               className="pl-10 pr-3 py-3 w-full border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 outline-none transition"
//               value={form.name}
//               onChange={handleChange}
//             />
//           </div>

//           <div className="relative">
//             <HiMail className="absolute left-3 top-3.5 text-blue-500" size={22} />
//             <input
//               name="email"
//               type="email"
//               placeholder="Email"
//               required
//               className="pl-10 pr-3 py-3 w-full border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 outline-none transition"
//               value={form.email}
//               onChange={handleChange}
//             />
//           </div>

//           <div className="relative">
//             <HiLockClosed className="absolute left-3 top-3.5 text-blue-500" size={22} />
//             <input
//               name="password"
//               type="password"
//               placeholder="Password"
//               required
//               minLength={6}
//               className="pl-10 pr-3 py-3 w-full border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 outline-none transition"
//               value={form.password}
//               onChange={handleChange}
//             />
//           </div>

//           {error && <p className="text-red-600 text-sm text-center">{error}</p>}
//           {success && <p className="text-green-600 text-sm text-center">{success}</p>}

//           <button
//             type="submit"
//             className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3 rounded-xl transition-all shadow-lg hover:shadow-xl"
//           >
//             Create Account
//           </button>
//         </form>

//         <div className="text-center text-gray-600 text-sm mt-6">
//           Already have an account?{" "}
//           <span
//             onClick={() => navigate("/login")}
//             className="text-blue-700 font-semibold cursor-pointer hover:underline"
//           >
//             Log In
//           </span>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Signup;
