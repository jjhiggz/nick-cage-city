import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const getProject = (id: string) => {
  const projects = [
    {
      id: 1,
      name: "nick 1",
      img: "https://assets-prd.ignimgs.com/2022/07/13/nicolas-cage-in-con-air-1657720981366.jpg",
    },
    {
      id: 2,
      name: "nick 2",
      img: "https://www.dkartdesigns.com/cdn/shop/products/CloseUp2_48792d76-ad2a-4492-af05-178efee7c8ee_1024x1024@2x.jpg?v=1597510262",
    },
    {
      id: 3,
      name: "nick 3",
      img: "https://trekmovie.com/wp-content/uploads/2023/01/cagepike2-head-777x437.jpg",
    },
  ];
  return Promise.resolve(projects.find((project) => project.id === +id));
};
type Project = {
  id: number;
  name: string;
  img: string;
};

export const ShowProject = () => {
  const params = useParams();
  const [project, setProject] = useState<null | Project>(null);
  const [isLoading, setIsLoading] = useState(true);

  const projectId = params.projectId;
  if (!projectId) throw new Error("I need a project id");

  useEffect(() => {
    getProject(projectId)
      .then((project) => {
        if (!project) throw new Error("Not Found");
        return project;
      })
      .then(setProject)
      .catch(() => {})
      .finally(() => {
        setIsLoading(false);
      });
  }, [projectId]);

  return (
    <>
      {isLoading && <div>...loading</div>}
      {!isLoading && !project && <div>Not Found</div>}
      {!isLoading && project && (
        <div>
          <h1>{project.name}</h1>
          <img src={project.img} alt="" />
        </div>
      )}
    </>
  );
};
