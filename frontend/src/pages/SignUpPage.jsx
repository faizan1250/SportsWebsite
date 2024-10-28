import { motion } from "framer-motion";
import Input from "../components/Input";
import { Loader, Lock, Mail, User } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PasswordStrengthMeter from "../components/PasswordStrengthMeter";
import { useAuthStore } from "../store/authStore";

const SignUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { signup, error, isLoading } = useAuthStore();

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      await signup(email, password, name);
      navigate("/verify-email");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center items-center bg-blue-1000 bg-opacity-00 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl 
			overflow-hidden" style={{height:'610px',marginTop:'150px'}}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full flex flex-col  bg-blue-900 bg-opacity-00 backdrop-filter backdrop-blur-xl rounded shadow-xl 
			overflow-hidden"
      >
        <div className="p-8">
          <h2 className="text-3xl text-white font-bold mb-6 text-center bg-gradient-to-r from-white-800 to-white-900  bg-clip-text">
            Create Account to ATHLETEHUB
          </h2>

          <form onSubmit={handleSignUp}>
            <Input
              icon={User}
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              icon={Mail}
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              icon={Lock}
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && (
              <p className="text-red-500 font-semibold mt-2">{error}</p>
            )}
            <PasswordStrengthMeter password={password} />

            <motion.button
              className="mt-5 w-full py-3 px-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white 
						font-bold rounded-lg shadow-lg hover:from-green-600
						hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2
						 focus:ring-offset-gray-900 transition duration-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <Loader className=" animate-spin mx-auto" size={24} />
              ) : (
                "Sign Up"
              )}
            </motion.button>
          </form>
        </div>
        <div className="px-8 py-4 bg-gray-900 bg-opacity-50 flex justify-center">
          <p className="text-sm text-gray-400">
            Already have an account?{" "}
            <Link to={"/login"} className="text-green-400 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </motion.div>
      {/* <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-[image:var(--image-url)] bg-cover h-screenmax-w-md w-full bg-blue-10000 bg-opacity-00 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl 
			overflow-hidden class"
        // style={{
        //   "--image-url": `url('https://i.pinimg.com/736x/bb/fd/e1/bbfde122f3418ff90ec05ce5667efb80.jpg')`,
        // }}
      >
        <div className="p-8">
          <span className="text-4xl text-black font-semibold mt-20">
            {" "}
            Welcome CHAMP !
          </span>
          <p className="font-semibold mt-5">
            {" "}
            Already have an account ?? <br></br>
            click " login " to get back .
          </p>
        </div>
      </motion.div> */}
      <div>
        <img src="https://i.pinimg.com/474x/9a/ea/59/9aea59d500a3f560d0a8958e418fa25f.jpg" style={{height:'610px'}}></img>
      </div>
    </motion.div>
  );
};
export default SignUpPage;
