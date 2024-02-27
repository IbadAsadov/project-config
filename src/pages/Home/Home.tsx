import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
    return (
        <>
            <h1>Home page</h1>
            <Link to="about">About Us</Link>
        </>
    );
};

export default Home;
