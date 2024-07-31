import { FC, useState } from "react";
import "./navbar.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { motion } from "framer-motion";
import animate from "../Navbar/navbarAnimation.js";
import { Link, useLocation } from "react-router-dom";
import NavBarData from "./NavBarData";
import { HashLink } from "react-router-hash-link";
import { useAppSelector, useAppDispatch } from "../../services/hooks";

const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const location = useLocation();
  const currentUser = useAppSelector((state) => state.auth.isLoggedIn);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ delay: 1, duration: 1 }}
        className="border-bottom"
      ></motion.div>
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: "100%" }}
        transition={{ delay: 1, duration: 1 }}
        className="border-left"
      ></motion.div>
      <div className="menu">
        <div className="logo">
          {currentUser ? (
            <Link to="/profile" state={{ background: location }}>
              <h1>
                BIMA <span>TARUNA</span>
              </h1>
            </Link>
          ) : (
            <Link to="/login" state={{ background: location }}>
              <h1>
                BIMA <span>TARUNA</span>
              </h1>
            </Link>
          )}
        </div>
        <ul className="normalLi">
          {NavBarData.map((item, index) => (
            <li key={index}>
              <HashLink to={item.path} smooth>
                {item.title}
              </HashLink>
            </li>
          ))}
        </ul>
        <div className="burgerMenu">
          <div className="burger-icon" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <ImCross /> : <GiHamburgerMenu />}
          </div>
        </div>
      </div>
      <motion.div
        initial={isOpen}
        variants={animate.menuVariants}
        animate={isOpen ? "opened" : "closed"}
        className="resMenu"
      >
        <div className="menuItemRes">
          <ul className="mobileUl">
            {NavBarData.map((item, index) => (
              <motion.li key={index} variants={animate.linkVariants}>
                <HashLink to={item.path} smooth>
                  {item.title}
                </HashLink>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
