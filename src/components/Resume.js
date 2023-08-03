import React from "react";

function Resume() {
    return (
        <section className="my-5">
        <div className="my-2">
            <p>
            📝 <a href="/assets/resume.docx" download>Download</a>
            </p>
            <h3>Programming Proficiencies</h3>
            <ul className="ul">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>API</li>
                <li>NodeJS</li>
                <li>MySQL</li>
                <li>MongoDB</li>
            </ul>
        </div>
        </section>
    );
}

export default Resume;