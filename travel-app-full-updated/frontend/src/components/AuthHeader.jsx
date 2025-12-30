import React from "react";
import { Link } from "react-router-dom";

function AuthHeader({ title, subtitle }) {
  return (
    <header className="px-6 pt-10 pb-6">
      <div className="flex justify-between items-center mb-10">
        <div className="inline-flex items-center gap-2">
          <div className="h-10 w-10 rounded-2xl bg-primary/90 flex items-center justify-center text-white font-bold text-lg">
            T
          </div>
          <span className="font-semibold text-slate-900 text-lg">
            Travelio
          </span>
        </div>
        <Link
          to="/login"
          className="text-sm text-primary font-medium hover:underline"
        >
          Skip
        </Link>
      </div>
      <h1 className="text-2xl font-semibold text-slate-900 mb-2">
        {title}
      </h1>
      {subtitle && (
        <p className="text-sm text-slate-500 leading-relaxed">{subtitle}</p>
      )}
    </header>
  );
}

export default AuthHeader;
