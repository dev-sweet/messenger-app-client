import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="p-6 login-form border w-[360px] bg-primary text-white rounded-lg">
        <h3 className="text-2xl text-center">Register</h3>
        <form className="grid gap-1" action="">
          <div className="form-control w-full">
            <label className="label text-sm text-white">User Name:</label>
            <input
              type="text"
              placeholder="Enter your user name"
              className="input input-bordered input-accent w-full bg-secondary"
            />
          </div>
          <div className="form-control w-full">
            <label className="label text-sm text-white">Email:</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered input-accent w-full bg-secondary"
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
          <div className="form-control w-full">
            <label className="label text-sm text-white">
              Confirm Password:
            </label>
            <input
              type="password"
              placeholder="Enter your confirm password"
              className="input input-bordered input-accent w-full bg-secondary"
            />
          </div>
          <div className="form-control w-full">
            <label className="label text-sm text-white">Upload Picture:</label>
            <input
              type="file"
              className="file-input file-input-accent file-input-sm file-input-bordered bg-secondary mx-auto w-full"
            />
          </div>
          <input
            type="submit"
            value="Register"
            className="mt-4 btn btn-secondary w-full"
          />
        </form>
        <div className="text-center mt-3">
          Already have an account ?{" "}
          <Link to="/login" className="text-blue-500">
            Login here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
