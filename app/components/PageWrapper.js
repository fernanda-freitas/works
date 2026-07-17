"use client";

import { motion } from "framer-motion";
import Header from "./Header";

const PageWrapper = ({ children, ...props }) => {
  return (
    <div className="bg-white min-h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        {...props}
      >
        <Header />
        {children}
      </motion.div>
    </div>
  );
};

export default PageWrapper;
