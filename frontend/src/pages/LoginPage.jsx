import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, Loader } from "lucide-react";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import { useAuthStore } from "../store/authStore";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, isLoading, error } = useAuthStore();

  const handleLogin = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className=" flex justify-center items-center bg-blue-1000 bg-opacity-00 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl 
		  overflow-hidden" style={{height:"600px",marginTop:'150px',width:'900px'}}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full flex flex-col justify-center bg-blue-900 bg-opacity-00  backdrop-filter backdrop-blur-xl  shadow-xl overflow-hidden"
        style={{height:"600px"}}
      >
        <div className="p-8">
          <h2 className="text-3xl text-white font-bold mb-14 text-center bg-gradient-to-r from-white-800 to-white-900 bg-clip-text">
            Welcome Back
          </h2>

          <form onSubmit={handleLogin}>
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

            <div className="flex items-center mb-6">
              <Link
                to="/forgot-password"
                className="text-sm mb-6 text-green-400 hover:underline"
              >
                Forgot password?
              </Link>
            </div>
            {error && (
              <p className="text-red-500 font-semibold mb-2">{error}</p>
            )}

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full mb-6 py-3 px-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg shadow-lg hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <Loader className="w-6 h-6 animate-spin  mx-auto" />
              ) : (
                "Login"
              )}
            </motion.button>
          </form>
        </div>
        <div className="px-8 py-4 bg-gray-900 bg-opacity-50 flex justify-center">
          <p className="text-sm text-gray-400">
            Don't have an account?{" "}
            <Link to="/signup" className="text-green-400 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
       style={{width:"600px"}}
      >
      <div>
        <img src="https://i.pinimg.com/474x/9a/ea/59/9aea59d500a3f560d0a8958e418fa25f.jpg" style={{height:"600px",}}></img>
      </div>
      </motion.div>
    </motion.div>
  );
};
export default LoginPage;
