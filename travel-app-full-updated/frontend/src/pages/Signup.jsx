
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthHeader from "../components/AuthHeader.jsx";

function Signup() {
  const [name, setName] = useState(""); 
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await res.json();
      if (res.ok) {
        alert("Account created. Please login.");
        navigate("/login");
      } else {
        alert(data.msg || "Signup failed");
      }
    } catch (err) {
      console.error(err);
      alert("Network error");
    }
  };

  return (
    <div className="min-h-screen bg-light flex flex-col">
      <AuthHeader title="Create account" subtitle="Sign up and start planning your next adventure." />

      <main className="px-6">
        <form className="space-y-4 mt-2" onSubmit={handleSignup}>
          <div>
            <label className="text-sm font-medium text-slate-700">Full name</label>
            <input value={name} onChange={e=>setName(e.target.value)} className="mt-1 w-full px-4 py-3 rounded-xl bg-white border border-slate-200 outline-none focus:ring-2 focus:ring-primary/40" placeholder="John Doe" />
          </div>
          <div>
            <label className="text-sm font-medium text-slate-700">Email</label>
            <input value={email} onChange={e=>setEmail(e.target.value)} className="mt-1 w-full px-4 py-3 rounded-xl bg-white border border-slate-200 outline-none focus:ring-2 focus:ring-primary/40" placeholder="you@example.com" />
          </div>
          <div>
            <label className="text-sm font-medium text-slate-700">Password</label>
            <input type="password" value={password} onChange={e=>setPassword(e.target.value)} className="mt-1 w-full px-4 py-3 rounded-xl bg-white border border-slate-200 outline-none focus:ring-2 focus:ring-primary/40" placeholder="Create a password" />
          </div>

          <button type="submit" className="w-full mt-4 bg-primary text-white font-semibold py-3 rounded-full shadow-soft">Sign up</button>
        </form>

        <p className="text-center text-sm text-slate-500 mt-6 mb-4">
          Already have an account? <Link to="/login" className="text-primary font-medium">Login</Link>
        </p>
      </main>
    </div>
  );
}

export default Signup;
