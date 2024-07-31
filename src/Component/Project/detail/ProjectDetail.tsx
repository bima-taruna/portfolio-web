import React from "react";
import "./project-detail.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Projects } from "../Project";
import Slider from "react-slick";
import CloseButton from "../../Shared/Button/CloseButton";
import Spinner from "../../Shared/Spinner/Spinner";
import Button from "../../Shared/Button/Button";
const ProjectDetail: React.FC = () => {
  const { id } = useParams();
  const [data, setData] = React.useState<Projects>();
  const [loading, setLoading] = React.useState<boolean>(false);
  const API_URL = import.meta.env.VITE_API_URL;
  const getDetail = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${API_URL}projects/${id}`);

      const project = res.data;
      setData(project);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  React.useEffect(() => {
    getDetail();
    console.log(data);
  }, [id]);

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <section className="project-detail-container">
      <section className="project-detail-body">
        <CloseButton />
        {loading ? (
          <Spinner />
        ) : (
          <>
            <div className="image-container">
              <Slider {...settings}>
                {data?.images.map((item: any, id: number) => (
                  <img src={item} alt="project-image" key={id} />
                ))}
              </Slider>
            </div>
            <section className="detail">
              <h1>{data?.title}</h1>
              <div className="description">{data?.description}</div>
              <div className="btn-link-container">
                <a href={data?.githubLinks} className="button">
                  <Button
                    text="Github"
                    textColor="white"
                    backgroundColor="#0a2647"
                    border="#3f5278"
                    textSize="1em"
                    hoverColor="#3f5278"
                  />
                </a>
                <a href={data?.demoLinks} className="button">
                  <Button
                    text="Demo"
                    textColor="white"
                    backgroundColor="#0a2647"
                    border="#3f5278"
                    textSize="1em"
                    hoverColor="#3f5278"
                  />
                </a>
              </div>
            </section>
          </>
        )}
      </section>
    </section>
  );
};

export default ProjectDetail;
