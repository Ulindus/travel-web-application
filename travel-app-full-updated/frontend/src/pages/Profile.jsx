
import React, { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext.jsx";

function ProfileContent({ user, logout }) {
  return (
    <div className="pb-24 min-h-screen bg-light">
      <header className="px-4 pt-6 flex items-center gap-3">
        <img
          src={user?.avatar || "https://i.pravatar.cc/80"}
          alt="profile"
          className="w-16 h-16 rounded-full"
        />
        <div>
          <h1 className="text-lg font-semibold text-slate-900">
            {user?.name || "User"}
          </h1>
          <p className="text-xs text-slate-500">{user?.email}</p>
        </div>
      </header>

      <main className="px-4 mt-6 space-y-2">
        <SectionLink label="My trips" to="/my-trips" />
        <SectionLink label="Payment methods" />
        <SectionLink label="Notifications" />
        <SectionLink label="Settings" to="/settings" />
        <SectionLink label="Help & support" to="/help" />

        <button onClick={logout} className="mt-4 w-full bg-red-500 text-white py-3 rounded-xl">Logout</button>
      </main>
    </div>
  );
}

function SectionLink({ label, to = "#", danger }) {
  const content = (
    <div
      className={`flex justify-between items-center px-4 py-3 rounded-xl bg-white border border-slate-100 ${
        danger ? "text-red-500" : "text-slate-800"
      }`}
    >
      <span className="text-sm">{label}</span>
      <span className="text-xs text-slate-400">›</span>
    </div>
  );
  if (to === "#") return content;
  return <Link to={to}>{content}</Link>;
}

export default function Profile() {
  const { user, logout } = useContext(AuthContext);
  if (!user) return <Navigate to="/login" replace />;
  return <ProfileContent user={user} logout={logout} />;
}
