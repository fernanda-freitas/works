"use client";

import { motion } from "framer-motion";
import Header from "./Header";
import Container from "./Container";

const PageWrapper = ({ children, ...props }) => {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        {...props}
        className="contents"
      >
        <Header />
        {children}
      </motion.div>
    </div>
  );
};

export default PageWrapper;
