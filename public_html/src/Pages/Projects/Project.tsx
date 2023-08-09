import {NavLink, useParams} from "react-router-dom";
import {projects, houses} from '../../Components/helper.ts'
import House from "../../Components/house.tsx";

const Project = () => {
    const {id} = useParams();
    const project = projects[id];

    return (
        <main className="section">
            <div className="container">
                <div className="project-details">
                    <h1 className="title-1">{project.title}</h1>
                    <div className="houses">
                        {houses[id].map((loop, index) => {
                                return <House
                                    className="project"
                                    title={loop.title}
                                    img={loop.img}
                                    index={index}
                                    key={index}
                                />
                        })}
                    </div>

                    <div className="project-details__desc">
                        <p>{project.desc}</p>
                    </div>

                </div>
            </div>
        </main>
    );
}

export default Project;