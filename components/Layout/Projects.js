import React, { useEffect } from "react";
import axios from "axios";
import Card from "../Card";
import data from "../data/projects.json"

const BASE_URL = "http://localhost:3000/api"

const Projects = () => {
    return(
        <div className="grid grid-rows-3 gap-4 justify-center items-center md:grid-flow-col">
            {
                data.projects.map(project => (
                    <Card project={project} />
                ))
            }
        </div>
    );
}

export default Projects;