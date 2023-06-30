import React from "react";
import "./button.scss";
import { motion } from "framer-motion";
interface ButtonProps {
  text: string;
  backgroundColor: string;
  border: string;
  textColor: string;
  textSize: string;
  hoverColor: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { text, backgroundColor, border, textColor, textSize, hoverColor } =
    props;
  const buttonRef = React.useRef<HTMLButtonElement | null>(null);

  React.useEffect(() => {
    if (buttonRef.current?.style) {
      buttonRef.current.style.backgroundColor = backgroundColor;
      buttonRef.current.style.border = border;
      buttonRef.current.style.color = textColor;
      buttonRef.current.style.fontSize = textSize;
    }
  }, [props]);

  return (
    <motion.button
      whileTap={{ scale: 0.7, backgroundColor: hoverColor }}
      whileHover={{ backgroundColor: hoverColor }}
      className="button"
      ref={buttonRef}
    >
      {text}
    </motion.button>
  );
};

export default Button;
