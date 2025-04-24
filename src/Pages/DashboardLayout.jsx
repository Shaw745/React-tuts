import React from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div>
      <section className="flex h-screen ">
        <div className="w-[20%] bg-gray-400">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <nav className="flex flex-col gap-3 font-bold text-2xl">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? "border border-blue-500 " : ""
              }
              end
            >
              Home
            </NavLink>
            <NavLink
              to="trash"
              className={({ isActive }) =>
                isActive ? "border border-blue-500 " : ""
              }
            >
              Trash
            </NavLink>
            <NavLink
              to="spam"
              className={({ isActive }) =>
                isActive ? "border border-blue-500 " : ""
              }
            >
              Spam
            </NavLink>
          </nav>
        </div>
        <div className="w-[80%] bg-gray-200 p-4">
          <Outlet />
        </div>
      </section>
    </div>
  );
};

export default DashboardLayout;
