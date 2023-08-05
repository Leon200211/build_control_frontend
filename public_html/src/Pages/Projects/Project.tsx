import {useParams} from "react-router-dom";
import {projects} from '../../Components/helper.ts'

const Project = () => {
    const {id} = useParams();
    const project = projects[id];

    return (
        <main className="section">
            <div className="container">
                <div className="project-details">
                    <h1 className="title-1">{project.title}</h1>

                    <img
                        src={project.imgBig}
                        alt={project.title}
                        className="project-details__cover"
                    />

                    <div className="project-details__desc">
                        <p>{project.desc}</p>
                    </div>

                </div>
            </div>
        </main>
    );
}

export default Project;