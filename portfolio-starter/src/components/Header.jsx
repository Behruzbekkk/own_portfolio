import React from "react";
import { fadeIn } from "../variants";
import { motion } from "framer-motion";
const Header = () => {
  return (
    <header className=" py-8">
      <div className="container mx-auto">
        <div className="flex flex-row justify-between items-center mt-8 text-[24px] lg:text-[32px] font-secondary font-semibold uppercase leading-[1] ">
          <a href="#" className="flex flex-col gap-3 text-white mr-4">
          <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            >
              <h3 className="text-accent">TWISTER</h3>
              <h3>BEXA</h3>
            </motion.h1>
          </a>
          <motion.button
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}>
          <button className="btn btn-sm">work with me</button>
          </motion.button>
        </div>
      </div>
    </header>
  );
};

export default Header;
