import { useEffect, useState } from "react";
import { useUser } from "@civic/auth-web3/react";
import { handleGuestUser } from "../../components/HandleGuestUser";
import Home from "../home/Home";

const Register = () => {
  const { user, signIn, signOut } = useUser();
  const [showHome, setShowHome] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (user) {
      setShowHome(true); // After login, show the Home page
    }
  }, [user]);

  if (showHome) {
    return <Home />;
  }

  return (
    <section className="m-6 sm:m-8 md:m-12 mt-16 sm:mt-24 grid grid-cols-1 sm:grid-cols-2 rounded-xl overflow-hidden shadow-xl border border-gray-200">
      <div className="hidden sm:block">
        <img
          src="/images/login.jpg"
          alt="Hotel Cover"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="flex flex-col justify-center items-center p-8 md:p-16 bg-white">
        <h1 className="text-3xl lg:text-4xl font-bold mb-8 text-indigo-600 text-center">
          Create your account
        </h1>

        <div className="flex flex-col w-full gap-5">
          {!user ? (
            <button
              onClick={signIn}
              className="w-full py-3 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition duration-300"
            >
              Sign in with Civic
            </button>
          ) : (
            <button
              onClick={signOut}
              className="w-full py-3 rounded-lg bg-red-500 text-white font-semibold hover:bg-red-600 transition duration-300"
            >
              Sign out
            </button>
          )}

          <div className="relative flex items-center justify-center my-4">
            <span className="absolute px-4 bg-white text-gray-400 text-sm">
              or
            </span>
            <div className="border-t w-full"></div>
          </div>

          <button
            onClick={handleGuestUser}
            className="w-full py-3 rounded-lg border-2 border-indigo-600 text-indigo-600 font-semibold hover:bg-indigo-50 transition duration-300"
          >
            Continue as Guest
          </button>
        </div>
      </div>
    </section>
  );
};

export default Register;
