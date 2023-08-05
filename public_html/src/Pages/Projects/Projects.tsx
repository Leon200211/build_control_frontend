import React from 'react';
import '../../assets/src/css/Projects.css'
import Project from "../../Components/Project.tsx";
import {projects} from '../../Components/helper.ts'

const Projects = () => {
    return (
        <div className={"section"}>
            <div className="container">
                <div className="projects">
                    {projects.map((item, index) =>
                        <Project
                            className="project"
                            key={index}
                            title={item.title}
                            img={item.img}
                            index={index}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Projects;