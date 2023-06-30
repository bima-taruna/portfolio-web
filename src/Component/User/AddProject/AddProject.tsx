import React from "react";
import "./addProject.scss";
import { BsUpload } from "react-icons/bs";
import Button from "../../Shared/Button/Button";
import CloseButton from "../../Shared/Button/CloseButton";
import { Formik, Form, Field, FormikValues } from "formik";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

import { Projects } from "../../Project/Project";

interface ProjectValues {
  title: string;
  description: string;
  demoLinks: string;
  githubLinks: string;
  images: any;
}

const AddProject = () => {
  const fileRef = React.useRef<any>();
  const inputFileRef = React.useRef<any>();
  const [fileName, setFileName] = React.useState("Upload Image");
  const API_URL = import.meta.env.VITE_API_URL;
  const user = JSON.parse(localStorage.getItem("user") || "");

  const navigate = useNavigate();
  const location = useLocation();
  const { from, id } = location.state;
  const [data, setData] = React.useState<Projects>();

  const fetchData = async () => {
    try {
      const res = await axios.get(`${API_URL}projects/${id}`, {
        headers: {
          Authorization: "Bearer " + user.token,
          "Cache-Control": "no-cache",
        },
      });
      const project = res.data;
      setData(project);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    if (from) {
      fetchData();
      console.log(data);
      console.log(fileRef);
    }
  }, [fileRef]);

  const editValue = {
    title: data?.title || "",
    description: data?.description || "",
    demoLinks: data?.demoLinks || "",
    githubLinks: data?.githubLinks || "",
    images: data?.images,
  };

  const handleSubmit = async (values: FormikValues) => {
    navigate("/");
    let formData: any = new FormData();
    let files = fileRef.current?.files;
    for (let i = 0; i < files.length; i++) {
      formData.append("images", files[i]);
    }
    formData.append("title", values.title);
    formData.append("description", values.description);
    formData.append("demoLinks", values.demoLinks);
    formData.append("githubLinks", values.githubLinks);

    try {
      let res = await axios.post(`${API_URL}projects`, formData, {
        headers: {
          "Content-type": "multipart/form-data",
          Authorization: "Bearer " + user.token,
        },
      });
      const data = await res.data;
      return data;
    } catch (error) {
      console.log(error);
    } finally {
      window.location.reload();
    }
  };

  const handleEdit = async (id: string, values: ProjectValues) => {
    navigate("/");

    const formData = new FormData();

    formData.append("title", values.title);
    formData.append("description", values.description);
    formData.append("demoLinks", values.demoLinks);
    formData.append("githubLinks", values.githubLinks);

    if (fileRef.current.files.length === 0) {
      formData.append("images", editValue.images);
    } else {
      let files = fileRef.current?.files;
      for (let i = 0; i < files.length; i++) {
        formData.append("images", files[i]);
      }
    }

    try {
      const res = await axios.put(`${API_URL}projects/${id}`, formData, {
        headers: {
          "Content-type": "multipart/form-data",
          Authorization: "Bearer " + user.token,
        },
      });
      await res.data;
      for (var pair of formData.entries()) {
        console.log(pair[0] + ", " + pair[1]);
      }
    } catch (error) {
      console.log(error);
    } finally {
      window.location.reload();
    }
  };

  const handleTextChange = () => {
    if (fileRef.current?.value) {
      if (fileRef.current?.files.length > 1) {
        setFileName(fileRef.current?.files[0].name + "...");
      } else {
        setFileName(fileRef.current?.files[0].name);
      }
    } else {
      setFileName("Upload Image");
    }
  };

  return (
    <section className="project-form">
      <section className="project-form-container">
        <CloseButton />
        <div className="form-header">
          <h1>{from ? "EDIT" : "ADD"} PROJECT</h1>
        </div>
        <Formik
          enableReinitialize={true}
          initialValues={editValue}
          onSubmit={(values: any) => {
            if (from) {
              handleEdit(id, values);
            } else {
              handleSubmit(values);
            }
          }}
        >
          {(formProps) => (
            <Form className="form-project-body">
              <label
                ref={inputFileRef}
                htmlFor="images"
                className="upload-container"
                onChange={() => handleTextChange()}
              >
                {from
                  ? data?.images[0]?.slice(data.images[0].length - 20)
                  : fileName}
                <BsUpload />
                <input
                  ref={fileRef}
                  id="images"
                  name="images"
                  type="file"
                  multiple
                  className="upload"
                />
              </label>
              <Field id="title" name="title" placeholder="title" />
              <Field
                id="description"
                name="description"
                as="textarea"
                placeholder="description"
                onClick={() => {
                  console.log(fileRef.current.files);
                  console.log(editValue.images);
                  console.log(data?.images);
                  console.log(fileRef.current.value);
                }}
              />
              <Field id="demoLinks" name="demoLinks" placeholder="demo link" />
              <Field
                id="githubLinks"
                name="githubLinks"
                placeholder="github link"
              />

              <div className="button-container">
                <Button
                  backgroundColor="green"
                  textColor="white"
                  hoverColor="none"
                  border="white"
                  text="Submit"
                  textSize="1em"
                />
              </div>
            </Form>
          )}
        </Formik>
      </section>
    </section>
  );
};

export default AddProject;
