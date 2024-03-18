import { Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

export const Busy = () => {
  return (
    <motion.div
      animate={{ scale: [1, 1.5, 1] }}
      transition={{ repeat: Infinity, duration: 2 }}
    >
      <Image
        src="https://img.icons8.com/glyph-neue/68/2631c3/year-of-rabbit.png"
        alt="bunny-logo"
        w="50px"
        h="50px"
      />
    </motion.div>
  );
};
