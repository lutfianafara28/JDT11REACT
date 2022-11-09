import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { getToken } from "../../redux/reducers/tokenSlice";

const Navbar = () => {
  const navigate = useNavigate();
  if (getToken() === null){ 
  return (
    <div className="shadow w-full fixed top-0 z-50">
      <div className="md:flex items-center justify-between bg-gray-50 py-4 md:px-10 px-7">
        <div
          className="font-bold text-xl cursor-pointer flex items-center text-gray-800"
          onClick={() => navigate(`/`)}
        >
          JDT 11
        </div>
        <div className="text-3x1 absolute right-10 top-8 cursor-pointer md:hidden"></div>
        <Button
          type="primary"
          shape="round"
          size={"large"}
          onClick={() => navigate(`/login`)}
        >
          Masuk
        </Button>
      </div>
    </div>
  );
  }else{
    return (
      <div className="shadow w-full fixed top-0 z-50">
        <div className="md:flex items-center justify-between bg-gray-50 py-4 md:px-10 px-7">
          <div
            className="font-bold text-xl cursor-pointer flex items-center text-gray-800"
            onClick={() => navigate(`/`)}
          >
            JDT 11
          </div>
          <div className="text-3x1 absolute right-10 top-8 cursor-pointer md:hidden"></div>
          <Button
            type="primary"
            shape="round"
            size={"large"}
            onClick={() => {
              localStorage.clear();
              navigate(`/login`)}}
          >
            Logout
          </Button>
        </div>
      </div>
    );
  }
};

export default Navbar;
