import { BsArrowDownSquare } from "react-icons/bs";
import { motion } from "framer-motion";
type Props = {};

const Square = (props: Props) => {
  return (
    <motion.div whileTap={{ scale: 0.8 }}>
      <BsArrowDownSquare />
    </motion.div>
  );
};

export default Square;
