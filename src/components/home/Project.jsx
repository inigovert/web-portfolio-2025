import React, { useState, useEffect, useCallback } from "react";
import Container from "react-bootstrap/Container";
import { Jumbotron } from "./migration";
import Row from "react-bootstrap/Row";
import ProjectCard from "./ProjectCard";
import axios from "axios";

const dummyProject = {
  name: null,
  description: null,
  svn_url: null,
  stargazers_count: null,
  languages_url: null,
  pushed_at: null,
};
const API = "https://api.github.com";
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const Project = ({ heading, username, length, specfic }) => {
  const allReposAPI = `${API}/users/${username}/repos?sort=updated&direction=desc`;
  const specficReposAPI = `${API}/repos/${username}`;
  const dummyProjectsArr = new Array(length + specfic.length).fill(
    dummyProject
  );

  const [projectsArray, setProjectsArray] = useState([]);

  const fetchRepos = useCallback(async () => {
    // Move config inside the function
    const config = GITHUB_TOKEN ? {
      headers: {
        'Authorization': `token ${GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json'
      }
    } : {};

    console.log("Using token:", GITHUB_TOKEN ? "Yes" : "No"); // Debug log

    let repoList = [];
    try {
      // First API call
      const response = await axios.get(allReposAPI, config);
      
      // Log rate limit info
      console.log("Rate limit remaining:", response.headers['x-ratelimit-remaining']);
      
      // slicing to the length
      repoList = [...response.data.slice(0, length)];
      
      // adding specified repos
      try {
        for (let repoName of specfic) {
          const response = await axios.get(`${specficReposAPI}/${repoName}`, config);
          repoList.push(response.data);
        }
      } catch (error) {
        console.error("Error fetching specific repo:", error.message);
      }
      
      // setting projectArray
      setProjectsArray(repoList);
      console.log("Successfully loaded", repoList.length, "projects");
      
    } catch (error) {
      console.error("API Error:", error.message);
      if (error.response) {
        console.error("Response status:", error.response.status);
        console.error("Response data:", error.response.data);
      }
    }
  }, [allReposAPI, length, specfic, specficReposAPI]); // GITHUB_TOKEN is constant, no need to include

  useEffect(() => {
    fetchRepos();
  }, [fetchRepos]);

  return (
    <Jumbotron fluid id="projects" className="bg-light m-0">
      <Container className="">
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        <Row>
          {projectsArray.length
            ? projectsArray.map((project, index) => (
              <ProjectCard
                key={`project-card-${index}`}
                id={`project-card-${index}`}
                value={project}
              />
            ))
            : dummyProjectsArr.map((project, index) => (
              <ProjectCard
                key={`dummy-${index}`}
                id={`dummy-${index}`}
                value={project}
              />
            ))}
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Project;
