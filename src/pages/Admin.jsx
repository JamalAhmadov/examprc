import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();

  return (
    <section id="adminPage">
      <div className="container">
        <h1>Admin Panel</h1>

        <div>
          <button
            onClick={() => {
              navigate("/admin");
            }}
          >
            Products
          </button>
          <button
            onClick={() => {
              navigate("/admin/add");
            }}
          >
            Add
          </button>
        </div>

        <Outlet />
      </div>
    </section>
  );
};

export default Admin;
