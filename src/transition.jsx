import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Loading from "./routes/Loading";

const transition = (OgComponent) => {
  const TransitionedComponent = () => {
    const [showTransition, setShowTransition] = useState(false);

    useEffect(() => {
      // Iniciar a transição após um pequeno atraso (por exemplo, 100ms)
      const timeout = setTimeout(() => {
        setShowTransition(true);
      }, 0);

      return () => clearTimeout(timeout);
    }, []);

    return (
      <>
        <OgComponent />
        {showTransition && (
          <>
            <motion.div
              className="slide-in hidden lg:block"
              initial={{ scaleY: 10, opacity: 0 }}
              animate={{ scaleY: 0, opacity: 1 }}
              exit={{ scaleY: 0, opacity: 0 }}
              transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
            ></motion.div>

          </>
        )}
      </>
    );
  };

  return TransitionedComponent;
};

export default transition;
