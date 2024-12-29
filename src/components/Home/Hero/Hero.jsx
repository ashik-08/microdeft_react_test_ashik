import { Link } from "react-router";

const Hero = () => {
  return (
    <section className="mt-32 mx-auto max-w-screen-xl pb-4 px-5 sm:px-10">
      <div className="text-center space-y-6">
        <h1 className="text-gray-800 font-bold text-4xl md:text-5xl">
          Optimize your website for
          <span className="text-primary-600"> Search engine</span>
        </h1>
        <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
      </div>
      <div className="mt-12 justify-center items-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex">
        <Link
          to="/"
          className="px-10 py-3.5 w-full bg-primary-600 text-white text-center rounded-md shadow-md block sm:w-auto"
        >
          Get started
        </Link>
        <Link
          to="/"
          className="px-10 py-3.5 w-full text-gray-500 text-center border rounded-md transition-colors duration-300 hover:text-primary-600 hover:shadow block sm:w-auto"
        >
          Try it out
        </Link>
      </div>
    </section>
  );
};

export default Hero;
