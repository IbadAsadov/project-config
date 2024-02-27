import React from "react";
import { Link } from "react-router-dom";

const About: React.FC = () => {
    return (
        <>
            <h1 className="title">About page</h1>
            <Link to="/">Home</Link>
        </>
    );
};

export default About;
