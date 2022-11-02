import React from "react";

const About = ({img="https://via.placeholder.com/2150", text}) => {
    return(
        <aside>
            <img src={img} alt="blog logo"/>
            <p>{text}</p>
        </aside>
    );
}

export default About;