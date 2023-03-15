import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="p-6 login-form border w-[360px] bg-primary text-white rounded-lg">
        <h3 className="text-2xl text-center">Login</h3>
        <form className="grid gap-1" action="">
          <div className="form-control w-full">
            <label className="label text-sm text-white">Email:</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered input-accent w-full bg-secondary"
              required
            />
          </div>
          <div className="form-control w-full">
            <label className="label text-sm text-white">Password:</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered input-accent w-full bg-secondary"
            />
          </div>
          <input
            type="submit"
            value="Login"
            className="mt-4 btn btn-secondary w-full"
          />
        </form>
        <div className="text-center mt-3">
          New to messenger ?{" "}
          <Link to="/register" className="text-blue-500">
            Register here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
