import { Link } from "react-router-dom";
import SocialLogin from "./SocialLogin";

const Register = () => {
  return (
    <div className="mx-4 md:mx-8 lg:mx-16">
      <div className="flex flex-col items-center">
        <div className="w-full max-w-sm border rounded p-5">
          <h1 className="text-2xl font-bold text-center uppercase">
            Create Account
          </h1>
          <form className="mt-5 space-y-5">
            <div className="form-control">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="outline-0 border-b py-2 text-sm"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="outline-0 border-b py-2 text-sm"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="outline-0 border-b py-2 text-sm"
                required
              />
            </div>
            <div className="flex gap-1">
              <input type="checkbox" name="check" required />
              <Link to="#" className="text-sm">
                Accept{" "}
                <span className="text-fuchsia-500 hover:underline">
                  Terms and Conditions
                </span>
              </Link>
            </div>
            <div className="form-control">
              <button className="bg-red-500 hover:bg-transparent hover:border hover: border-red-500 hover:text-black transition-all duration-300 p-2 rounded uppercase text-white font-medium">
                Register
              </button>
            </div>
          </form>
          <p className="text-sm text-center pt-5">
            <span>Have An Account?</span>{" "}
            <Link
              to="/login"
              className="text-fuchsia-500 hover:underline font-medium"
            >
              Login
            </Link>
          </p>
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default Register;
