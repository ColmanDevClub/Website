import React from 'react';
import { motion } from 'framer-motion';

const EntranceAnimation = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.7 }}
    >
      {children}
    </motion.div>
  );
};

export default EntranceAnimation;