import React from 'react';
import {useParams} from "react-router-dom";
import {houses} from "../../../Components/helper.ts";

const House = () => {
    const {id} = useParams();
    const house = houses[id];
    return (
        <main className="section">
            <div className="container">
                <div className="project-details">
                    <h1 className="title-1">{house.title}</h1>
                    <img src={house.img} alt=""/>
                    <div className="project-details__desc">
                        <p>{house.desc}</p>
                    </div>

                </div>
            </div>
        </main>
    );
};

export default House;