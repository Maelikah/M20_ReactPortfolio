import React from "react";
import pic from '../assets/pic.png';

function About() {
    return (
        <section className="my-5">
            <div className="my-2">
            <div className="my-5">
                <img
                    src= {pic}
                    alt="Profile Pic" 
                    width="128"
                    height="128"
                />
            </div>
            <p>
            I am a driven Industrial & Systems Engineer with 14 years of management experience in the audits and information security fields, with a special focus on Cybersecurity, IT Risk Management frameworks and defining Third Party Risk Management Programs. Recently, I have embarked on an exciting coding adventure, exploring the world of programming and web development. With my passion for continuous learning and improvement and my strong work ethics,  I can bring a unique blend of management expertise, IT knowledge and coding skills to enhance processes, automate tasks, and foster an agile work environment.
            </p>
            </div>
        </section>
    );
}

export default About;