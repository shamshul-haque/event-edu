import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../../../provider/AuthProvider";
import SocialLogin from "./SocialLogin";

const Login = () => {
  const { logIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    e.currentTarget.reset();

    logIn(email, password)
      .then((result) => {
        if (result.user) {
          navigate(from, {
            replace: true,
          });
        }
        toast.success("Login successfully!", {
          position: "top-center",
          theme: "colored",
        });
      })
      .catch(() => {
        toast.error("Please provide correct email and password!", {
          position: "top-center",
          theme: "colored",
        });
      });
  };
  return (
    <div className="mx-4 md:mx-8 lg:mx-16">
      <div className="flex flex-col items-center">
        <div className="w-full max-w-sm border rounded p-5">
          <h1 className="text-2xl font-bold text-center uppercase">Login</h1>
          <form onSubmit={handleLogin} className="mt-5 space-y-5">
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
            <div className="flex items-center justify-between">
              <p className="flex gap-1">
                <input type="checkbox" name="terms" />
                <span className="text-sm">Remember Me</span>
              </p>
              <Link to="#" className="text-sm text-fuchsia-500 hover:underline">
                Forgot Password
              </Link>
            </div>
            <div className="form-control">
              <button className="bg-red-500 hover:bg-transparent hover:border hover: border-red-500 hover:text-black transition-all duration-300 p-2 rounded uppercase text-white font-medium">
                Login
              </button>
            </div>
          </form>
          <p className="text-sm text-center pt-5">
            <span>{`Don't Have Account?`}</span>{" "}
            <Link
              to="/registration"
              className="text-fuchsia-500 hover:underline font-medium"
            >
              Create
            </Link>
          </p>
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default Login;
