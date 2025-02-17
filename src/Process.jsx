import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function Process() {
  const [projectData, setProjectData] = useState([]);
  const [loading, setLoading] = useState(true);

  const location = useLocation();

  const pathname = location.pathname.split("/")[1];

  useEffect(() => {
    fetch(
      `https://aur0cyqw.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27project%27+%26%26+pathName+%3D%3D+%22${pathname}%22%5D`
    )
      .then((response) => response.json())
      .then((data) => {
        setProjectData(data.result[0]);
        setLoading(false);
      });
  }, [pathname]);

  console.log(projectData);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2>{projectData.title}</h2>
          <p>{projectData.mainText}</p>
        </div>
      )}
    </div>
  );
}

export default Process;
