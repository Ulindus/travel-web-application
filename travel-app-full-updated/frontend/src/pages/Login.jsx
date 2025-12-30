
import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthHeader from "../components/AuthHeader.jsx";
import { AuthContext } from "../context/AuthContext.jsx";

function Login() {
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (res.ok) {
        login(data.user, data.token);
        navigate("/home");
      } else {
        alert(data.msg || "Login failed");
      }
    } catch (err) {
      console.error(err);
      alert("Network error");
    }
  };

  return (
    <div className="min-h-screen bg-light flex flex-col">
      <AuthHeader
        title="Welcome back"
        subtitle="Login to continue exploring and managing your trips."
      />

      <main className="px-6">
        <form className="space-y-4 mt-2" onSubmit={handleLogin}>
          <div>
            <label className="text-sm font-medium text-slate-700">Email</label>
            <input className="mt-1 w-full px-4 py-3 rounded-xl bg-white border border-slate-200 outline-none focus:ring-2 focus:ring-primary/40" value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@example.com" />
          </div>
          <div>
            <label className="text-sm font-medium text-slate-700">Password</label>
            <input type="password" className="mt-1 w-full px-4 py-3 rounded-xl bg-white border border-slate-200 outline-none focus:ring-2 focus:ring-primary/40" value={password} onChange={e=>setPassword(e.target.value)} placeholder="••••••••" />
            <div className="text-right mt-1">
              <button type="button" className="text-xs text-primary font-medium">Forgot password?</button>
            </div>
          </div>

          <button type="submit" className="w-full mt-4 bg-primary text-white font-semibold py-3 rounded-full shadow-soft">Log in</button>
        </form>

        <p className="text-center text-sm text-slate-500 mt-6 mb-4">
          Don't have an account? <Link to="/signup" className="text-primary font-medium">Sign up</Link>
        </p>
      </main>
    </div>
  );
}

export default Login;
