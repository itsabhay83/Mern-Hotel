import { useEffect } from "react";
import { useUser } from "@civic/auth-web3/react";
import { handleGuestUser } from "../../components/HandleGuestUser";

const Login = () => {
  const { user, signIn, signOut } = useUser();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

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

        {!user ? (
          <button
            onClick={signIn}
            className="w-full rounded-md py-2 mt-8 bg-[#4f46e5] text-white hover:bg-[#6661c7]"
          >
            Sign in 
          </button>
        ) : (
          <button
            onClick={signOut}
            className="w-full rounded-md py-2 mt-8 bg-red-500 text-white hover:bg-red-600"
          >
            Sign out
          </button>
        )}

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
