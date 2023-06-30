import React from "react";
import "./project.scss";
import { otherRef } from "../About/About";
import ProjectCard from "../Shared/Project Card/ProjectCard";
import background from "../../assets/bg.jpg";
import { Link, useLocation } from "react-router-dom";
import { useAppSelector } from "../../services/hooks";
import axios from "axios";
import Button from "../Shared/Button/Button";
import jwt from "jwt-decode";
import { Outlet } from "react-router";
import Slider from "react-slick";
import settings from "../Shared/slickSettings";
import Spinner from "../Shared/Spinner/Spinner";
import { motion } from "framer-motion";

export interface Projects {
  id: string;
  title: string;
  description: string;
  demoLinks: string;
  githubLinks: string;
  images: any;
  cloudinary_id: string[];
  author: string;
}

type JwtUser = {
  userId: string;
  username: string;
  name: string;
  isAdmin: boolean;
};

const Project: React.FC<otherRef> = React.forwardRef((props, ref: any) => {
  const API_URL = import.meta.env.VITE_API_URL;
  const [data, setData] = React.useState<Array<Projects> | null | undefined>();
  const [show, setShow] = React.useState(false);
  const currentUser = useAppSelector((state) => state.auth.user);

  const location = useLocation();
  const [loading, setLoading] = React.useState(true);

  const checkUser = () => {
    let decodeUser: JwtUser | null;
    if (currentUser) {
      decodeUser = jwt(currentUser);
      if (decodeUser?.isAdmin) {
        setShow(true);
      }
    } else {
      setShow(false);
    }
  };

  const changeLoading = (newState: boolean) => {
    setLoading(newState);
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(API_URL + "projects");
      const project = res.data;
      setData(project);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchData();
    checkUser();

    console.log(loading);
    return () => {
      setData(null);
    };
  }, [currentUser]);

  return (
    <section ref={ref} className="project" id="project">
      <img className="background-image" src={background} alt="background" />
      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: "100vh" }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 1, type: "tween" }}
        className="border-left"
      ></motion.div>
      <section className="header">
        <h1>My Personal Project</h1>
      </section>
      <section className="project-container">
        {show && (
          <div className="tambah-button">
            <Link to="/add-project" state={{ background: location }}>
              <Outlet context={loading} />
              <Button
                text="tambah project"
                backgroundColor="#205295"
                border="white"
                textColor="white"
                textSize="1em"
                hoverColor="#2c74b3"
              />
            </Link>
          </div>
        )}

        <div className="project-list">
          {data?.length != undefined && data.length > 0 ? (
            <Slider {...settings}>
              {data?.map((item, id) => (
                <>
                  <ProjectCard
                    key={item.id}
                    image={item.images}
                    title={item.title}
                    id={item.id}
                    description={item.description}
                    githubLinks={item.githubLinks}
                    demoLinks={item.demoLinks}
                    changeLoading={changeLoading}
                  />
                  <Link
                    to={`/project-detail/${item.id}`}
                    state={{
                      background: location,
                    }}
                    key={id}
                  >
                    <div className="detail-button">
                      <Button
                        text="Detail"
                        backgroundColor="#d8a31a"
                        border="#3f5278"
                        textColor="white"
                        textSize="1em"
                        hoverColor="#3f5278"
                        key={id}
                      />
                    </div>
                  </Link>
                </>
              ))}
            </Slider>
          ) : loading ? (
            <Spinner />
          ) : (
            <h1>tidak ada data</h1>
          )}
        </div>
      </section>
    </section>
  );
});

export default Project;
