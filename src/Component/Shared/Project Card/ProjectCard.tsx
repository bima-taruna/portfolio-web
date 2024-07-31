import React from "react";
import axios from "axios";
import "./projectCard.scss";
import { useAppSelector } from "../../../services/hooks";
import { AiFillDelete } from "react-icons/ai";
import { BsFillPencilFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useIsSmall } from "../../../services/checkScreenSize";
type Props = {
  image: string;
  title: string;
  id: String;
  description: String;
  githubLinks: String;
  demoLinks: String;
  changeLoading: (arg: boolean) => void;
};

const imageVariants = {
  show: { opacity: 1 },
  hide: { opacity: 0.5 },
};

function ProjectCard(props: Props) {
  const isSmall = useIsSmall();
  let cardVariants;
  if (isSmall) {
    cardVariants = {
      show: { opacity: 1, display: "flex" },
      hide: { opacity: 0, display: "none" },
    };
  }
  const API_URL = import.meta.env.VITE_API_URL;
  // const user = JSON.parse(localStorage.getItem("user") || "");
  const currentUser = useAppSelector((state) => state.auth.user);
  const parse = JSON.parse(currentUser);
  const location = useLocation();
  const containerRef: any = React.useRef();
  const [loading, setLoading] = React.useState<boolean>(false);

  const handleDelete = async (id: String) => {
    try {
      const res = await axios.delete(`${API_URL}projects/${id}`, {
        headers: {
          Authorization: "Bearer " + parse.token,
        },
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    } finally {
      window.location.reload();
    }
  };

  return (
    <motion.section ref={containerRef} className="project-body">
      <img src={props.image[0]} alt={props.title} />
      <>
        {currentUser ? (
          <div className="button-container">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="edit-button"
            >
              <Link
                to="/add-project"
                state={{
                  background: location,
                  id: props.id,
                  from: "card",
                }}
              >
                <BsFillPencilFill />
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="delete-button"
              onClick={() => {
                handleDelete(props.id);
                setLoading(true);
              }}
            >
              <AiFillDelete />
            </motion.div>
          </div>
        ) : null}
      </>
    </motion.section>
  );
}

export default ProjectCard;
