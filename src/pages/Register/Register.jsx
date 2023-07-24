import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from './../../hooks/useAuth';
import Swal from "sweetalert2";

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const { createUser, updateUserProfile } = useAuth();

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUserProfile(data.name, data.photoURL, data.number).then(() => {
          const savedUser = { name: data.name, email: data.email, image: data.photoURL, phone: data.number };
          fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(savedUser),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                reset();
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Successfully user account created",
                  showConfirmButton: false,
                  timer: 1500,
                });
                navigate("/");
              }
            });
        });
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  return (
    <div className="bg-gray-500 py-5">
      <h3 className="text-5xl font-semibold text-center mb-10">
        Please Register
      </h3>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-1/2 mx-auto bg-gray-800 p-20 rounded-lg"
      >
        <div className="mb-4">
          <label
            htmlFor="fullName"
            className="block mb-2 font-medium text-white"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            className="w-full px-4 text-black py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="text-red-500">{errors.name.message}</span>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="photoURL"
            className="block mb-2 font-medium text-white"
          >
            Photo URL
          </label>
          <input
            type="text"
            id="photoURL"
            className="w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("photoURL", { required: true })}
          />
          {errors.photoURL && (
            <span className="text-red-500">{errors.photoURL.message}</span>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="phoneNumber"
            className="block mb-2 font-medium text-white"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            className="w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("number", {
              required: "Phone number is required",
              pattern: {
                value: /^(\+880|0)1\d{9}$/,
                message: "Please enter a valid Bangladeshi phone number.",
              },
            })}
          />
          {errors.number && (
            <span className="text-red-500">{errors.number.message}</span>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 font-medium text-white">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            className="w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("password", {
              required: "Password is required",
              pattern: {
                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                message:
                  "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit.",
              },
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
            value="Register"
          />
        </div>
      </form>
      <p className="text-center py-5 text-lg font-medium text-white">
        Already Registered User?{" "}
        <span className="text-primary">
          <Link to="/login">Please Login</Link>
        </span>
      </p>
    </div>
  );
};

export default Register;
