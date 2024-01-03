import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import locale from '../locale';

const ProjectCard = ({ view, project, setView }) => {

  const [data, setData] = useState(undefined);

  useEffect(() => {
    axios.get(`/data/projects/project_cards/${project}.json`)
    .then((response) => {
      setData(response.data);
    })
    .catch((err) => {
      console.error(err);
      setData({
        title: 'Error',
        desc: 'There was an error loading the details of this project. If this error persists, please let a site administrator know.',
      });
    });
  }, []);

  return (
    <div>
      {JSON.stringify(data)}
    </div>
  );
};

export default ProjectCard;