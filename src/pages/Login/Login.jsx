import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signIn } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Login Successful",
            showConfirmButton: false,
            timer: 1500,
          });
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.error(err.message);
      });
  };
  return (
    <div className="bg-gray-500 py-10">
      <h3 className="text-5xl font-semibold text-center mb-10">Please Login</h3>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-1/2 mx-auto bg-gray-800 p-20 rounded-lg"
      >
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 font-medium text-white">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block mb-2 font-medium text-white"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("password", {
              required: "Password is required",
            })}
          />
          {errors.password && (
            <span className="text-red-500">{errors.password.message}</span>
          )}
        </div>

        <div className="text-center">
          <input
            className="bg-emerald-500 text-white py-2 px-4 rounded-md hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 mt-3"
            type="submit"
            value="Login"
          />
        </div>
      </form>
      <p className="text-center py-5 text-lg font-medium text-white">
        New to the Book My Campus?{" "}
        <span className="text-primary">
          <Link to="/register">Please Register</Link>
        </span>
      </p>
    </div>
  );
};

export default Login;
