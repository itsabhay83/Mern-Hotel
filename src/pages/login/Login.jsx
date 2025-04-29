import { useEffect, useState } from "react";
import { useUser } from "@civic/auth-web3/react";
import { useNavigate } from "react-router-dom";
import { handleGuestUser } from "../../components/HandleGuestUser";

const Login = () => {
  const { user, signIn } = useUser();
  const navigate = useNavigate();
  const [isSigningIn, setIsSigningIn] = useState(false);

  const handleSignIn = async () => {
    setIsSigningIn(true);
    await signIn();
  };

  useEffect(() => {
    if (user) {
      navigate("/");
      window.location.reload();
    }
  }, [user, navigate]);

  if (isSigningIn || user) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-blue-600 font-medium animate-pulse">Logging in...</p>
        </div>
      </div>
    );
  }

  return (
    <section className="m-6 sm:m-8 md:m-12 mt-12 sm:mt-20 sm:grid sm:grid-cols-2 border">
      <div className="max-[640px]:hidden sm:h-auto overflow-hidden">
        <img
          src="/images/login.jpg"
          width={300}
          height={300}
          alt="cover"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="m-6 lg:m-28 lg:py-12 flex flex-col">
        <h1 className="text-2xl lg:text-3xl font-semibold mb-7 lg:mb-10 text-[#908dcd]">
          Sign in to your account
        </h1>

        <button
          onClick={handleSignIn}
          className="w-full rounded-md py-2 mt-8 bg-[#4f46e5] text-white hover:bg-[#6661c7]"
        >
          Sign in
        </button>

        <button
          onClick={handleGuestUser}
          className="w-full rounded-md py-2 mt-8 bg-[#4f46e5] text-white hover:bg-[#6661c7]"
        >
          Login as Guest
        </button>
      </div>
    </section>
  );
};

export default Login;
