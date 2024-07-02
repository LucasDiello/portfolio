import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const transition = (OgComponent) => {
  const screenWidth = window.innerWidth;
  const screenMobile = screenWidth < 768 ? 3 : 2;
  const TransitionedComponent = () => {

    return (
      <>
        <OgComponent />
            <motion.div
              className="slide-out "
              initial={{ scaleY: 10 }}
              animate={{ scaleY: 0 }}
              exit={{ scaleY: 0 }}
              transition={{ duration: screenMobile, ease: [0.22, 1, 0.36, 1] }}
            ></motion.div>
      </>
    );
  };

  return TransitionedComponent;
};

export default transition;
