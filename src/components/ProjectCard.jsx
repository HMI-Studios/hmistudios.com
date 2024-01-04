import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Card from '../components/Card.jsx';

const getLinks = (data) => {
  const links = [];
  if (data.page) {
    links.push({
      title: 'Learn More',
      path: data.page,
    });
  }
  if (data.site) {
    links.push({
      title: 'Visit Site',
      href: data.site,
    });
  }
  if (data.github) {
    links.push({
      title: 'GitHub Repo',
      href: data.github,
    });
  }
  if (data.read) {
    links.push({
      title: 'Read',
      href: data.read,
    });
  }
  return links;
};

const ProjectCard = ({ project, collapsed, collapsible, small, draft }) => {

  const [data, setData] = useState(undefined);
  const [isCollapsed, setIsCollapsed] = useState(collapsed);

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
    <>
      {data && (
        <>
          {isCollapsed ? (
            <div className="card d-flex align-center space-between pa-4">
              <h2 className="ma-0">{data.title}</h2>
              <a className="link nav-btn" onClick={() => setIsCollapsed(false)}>Show Card</a>
            </div>
          ) : (
            <Card
              key={data.title}
              title={data.title}
              subtitle={data.authors && `by ${data.authors}`}
              body={data.desc}
              cover={
                <img src={data.image}></img>
              }
              links={getLinks(data)}
              actions={[
                draft && {
                  title: 'Coming Soon!',
                  action: () => {},
                },
                collapsible && {
                  title: 'Hide Card',
                  action: () => setIsCollapsed(true),
                },
              ].filter(item => item)}
              small={small}
            />
          )}
        </>
      )}
    </>
  );
};

export default ProjectCard;