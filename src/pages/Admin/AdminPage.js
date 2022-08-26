import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminPage = () => {
  let navigate = useNavigate();

  return (
    <div>
      <div
        onClick={() => {
          navigate("../admin/userlist", { replace: true });
        }}
      >
        Userlist
      </div>
      <div>OrderSearch</div>
    </div>
  );
};

export default AdminPage;
