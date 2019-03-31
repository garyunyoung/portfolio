import React from "react";
import Header from './Header';
import "./About.scss";

export default function ProjectPage(props) {
    return (
        <Header title={props.title}/>
    )
}

export const BethsPage = () => <ProjectPage
    title="project #1"

    />