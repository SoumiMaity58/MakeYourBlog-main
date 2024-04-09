import React from "react";
import Logo from "../components/Logo";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <>
      <div className="text-white overflow-hidden pt-14 pb-80">
        <div className="flex justify-between px-8 py-8">
          {/* <Link to={"/"}>
            <Logo />
          </Link>
          <Link to={"/login"}>
            <p className="text-slate-200 text-2xl hover:cursor-pointer">
              Sign In
            </p>
          </Link> */}
        </div>
        <div>
          <div className="flex justify-center py-2">
            <h1 className="text-4xl">Spread Your Knowledge & Creativity</h1>
          </div>
          <div className="flex justify-center pt-3 pb-5">
            <p className="text-xl">Create a blog that servers our comminity</p>
          </div>
          <div className="w-auto h-auto flex justify-center py-3">
            <Link to={"/add-post"}>
          <motion.div
            className="box w-[200px] h-[70px] bg-yellow-500 text-xl font-semibold rounded-[35px] px-3 items-center justify-center flex"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            Create Your Blog
          </motion.div>
          </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
