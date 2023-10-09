import { updateProfile } from "firebase/auth";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../../../provider/AuthProvider";
import SocialLogin from "./SocialLogin";

const Register = () => {
  const { registerUser, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegistration = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    const photo = form.get("photo");
    e.currentTarget.reset();

    if (
      !/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\-])[A-Za-z0-9!@#$%^&*()_+{}[\]:;<>,.?~\\-]{6,}$/.test(
        password
      )
    ) {
      toast.error(
        "Password must include one uppercase & special character and length should be at least six!",
        {
          position: "top-center",
          theme: "colored",
        }
      );
      return;
    }

    registerUser(email, password).then((result) => {
      updateProfile(result.user, {
        displayName: name,
        photoURL: photo,
      });
      logOut().then(() => {
        navigate("/login");
      });
      toast.success("Your profile created successfully. Please login now!", {
        position: "top-center",
        theme: "colored",
      });
    });
  };

  return (
    <div className="mx-4 md:mx-8 lg:mx-16">
      <div className="flex flex-col items-center">
        <div className="w-full max-w-sm border rounded p-5">
          <h1 className="text-2xl font-bold text-center uppercase">
            Create Account
          </h1>
          <form onSubmit={handleRegistration} className="mt-5 space-y-5">
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
            <div className="form-control">
              <input
                type="url"
                name="photo"
                placeholder="Photo URL"
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
