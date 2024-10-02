import Head from "next/head";

export default function Login() {
  return (
    <>
      <Head>
        <title>Login Page</title>
      </Head>
      <div className="min-h-screen flex flex-col md:flex-row h-full">
        {/* Left Section - Welcome and Key Advantages */}
        <div
          className="md:w-1/2 flex-1 bg-teal-700 text-white p-8 md:p-10 flex flex-col justify-center"
          style={{ backgroundColor: "#167177" }}
        >
          <h1
            className="text-3xl md:text-4xl font-bold fon mb-4 text-center md:text-left"
            style={{ fontSize: "32px" }}
          >
            Welcome!
          </h1>
          <div>
            <h2 className="text-lg md:text-xl font-semibold mb-3 text-center md:text-left">
              Key Advantages:
            </h2>
            <ul className="space-y-3 md:space-y-4 text-sm md:text-base">
              <li className="flex items-center">
                <img
                  src="/icons/star.svg"
                  alt="Icon"
                  className="w-5 h-5 mr-2"
                />{" "}
                Complaint facts panels for food, beverages and dietary
                supplements under 21 CFR part 101
              </li>
              <li className="flex items-center">
                <img
                  src="/icons/star.svg"
                  alt="Icon"
                  className="w-5 h-5 mr-2"
                />{" "}
                Common or usual name and latin binomial ingredient lookup.
              </li>
              <li className="flex items-center">
                <img
                  src="/icons/star.svg"
                  alt="Icon"
                  className="w-5 h-5 mr-2"
                />{" "}
                Rules based adherence to rounding, declarations, content claims,
                warnings, allergens, etc.
              </li>
              <li className="flex items-center">
                <img
                  src="/icons/star.svg"
                  alt="Icon"
                  className="w-5 h-5 mr-2"
                />{" "}
                Proactive regulatory suggestions and/or considerations
              </li>
              <li className="flex items-center">
                <img
                  src="/icons/star.svg"
                  alt="Icon"
                  className="w-5 h-5 mr-2"
                />{" "}
                Multi-format, single or multi-DV, single or multi-serving,
                print-ready, editable artwork files.
              </li>
              <li className="flex items-center">
                <img
                  src="/icons/star.svg"
                  alt="Icon"
                  className="w-5 h-5 mr-2"
                />{" "}
                User-friendly, intuitive, single user or team management
                solutions.
              </li>
            </ul>
          </div>
        </div>

        {/* Right Section - Login Form */}
        <div className="md:w-1/2 flex-1 bg-gray-100 flex flex-col justify-center p-8 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-center md:text-left">
            Welcome Back! 👋
          </h2>
          <p className="text-600 mb-8 text-center md:text-left">
            You need to be signed in to access the dashboard.
          </p>

          <form>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email ID
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your mail"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mt-6"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                />
                <span className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
                  {/* Add eye icon here */}
                  <img
                    src="/icons/eye.svg"
                    alt="Eye Icon"
                    className="w-3 h-3"
                  />
                  {/* 👁️ */}
                </span>
              </div>
            </div>

            <div className="flex justify-end items-center mt-2">
              <a
                href="#"
                className="text-sm font-bold text-teal-600 hover:text-teal-500"
                style={{ color: "#167177" }}
              >
                Forget Password?
              </a>
            </div>

            <div>
              <button
                type="submit"
                className="w-full mt-7 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                style={{ backgroundColor: "#167177" }}
              >
                Log in
              </button>
            </div>
          </form>
          <hr className="my-7 border-gray-300" />
          <div className="text-center">
            <p className="text-sm">
              Don’t have an account yet?{" "}
              <a
                href="#"
                className="font-bold text-teal-600 hover:text-teal-500"
                style={{ color: "#167177" }}
              >
                Register Now
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
