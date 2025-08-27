import React from "react";
import "./education.css";

const Education = () => {
    const educationData = [
        {
            degree: "Bachelor of Technology (B.Tech)",
            branch: "Computer Science",
            college: "kamla Nehru Institute of Physical & Social Sciences, Faridipur Sultanpur (U.P)",
            year: "2021 - 2025",
            description: "Focused on software development, full stack technologies, and modern frameworks."
        },
        {
            degree: "Intermediate (12th)",
            branch: "Science - PCM",
            School: "Saraswati Vidya Mandir",
            year: "2019 - 2021"
        },
        {
            degree: "High School (10th)",
            branch: "General Studies",
            School: "Saraswati Vidya Mandir",
            year: "2017 - 2019"
        }
    ];

    return (
        <section id="education" className="education">
            <h2 className="education-title">Education</h2>
            <div className="timeline">
                {educationData.map((edu, index) => (
                    <div className="timeline-item" key={index}>
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <h3>{edu.degree}</h3>
                            <h4>{edu.branch}</h4>
                            <p className="college">{edu.School}</p>
                            <span className="year">{edu.year}</span>
                            <p className="desc">{edu.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;
