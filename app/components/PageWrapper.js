"use client";

import { motion } from "framer-motion";
import Header from "./Header";
import Container from "./Container";

const PageWrapper = ({ children, ...props }) => {
  return (
    <div className="bg-white min-h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        {...props}
        className="flex flex-col h-full"
      >
        <Header />
        <Container>
          {children}
        </Container>
      </motion.div>
    </div>
  );
};

export default PageWrapper;
