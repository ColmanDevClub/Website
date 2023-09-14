import { motion } from "framer-motion";


const cardVariants = {
    offscreen: {
      y: 500,
    },
    onscreen: {
      y: 0,
    //   rotate: -10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

function SplashAnimation({children}) {
    // const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;
  
    return (
      <motion.div
        className="card-container"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <div className="splash" style={{ background: "white" }} />
        <motion.div className="card" variants={cardVariants}>
          {children}
        </motion.div>
      </motion.div>
    );
  }
  
  export default SplashAnimation