import React from 'react';
import './AboutUs.css'; // Make sure to create and link the AboutUs.css file
import fazalImage from './fazal2.jpg';

const teamMembers = [
    {
        name: "fazal shaik",
        role: " Creator & Director",
        image: fazalImage,
        description: "I’m ttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt yyyyyyyyyyyy passionate about design and building amazing experiences."
    },
    {
        name: "Vamsi Krishna",
        role: "Backend-developer",
        image: "/",
        description: "Art is not just what I do, it's who I am."
    },
    {
        name: "Shannon Regan",
        role: "Designer",
        image: "/path-to-your-image3.png",
        description: "Designing interfaces that speak to people."
    },
    {
        name: "Kevin Brooks",
        role: "Lead Developer",
        image: "/path-to-your-image4.png",
        description: "Code is my canvas."
    },
    
];

const AboutUs = () => {
    return (
        <div className="about-us">
            <h1 className="about-us-title">our team</h1>
            <div className="team-members">
                {teamMembers.map((member, index) => (
                    <div className={`team-member ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
                        <div className="team-member-image-container">
                            <img src={member.image} alt={member.name} className="team-member-image" />
                        </div>
                        <div className="team-member-info">
                            <h2>{member.name}</h2>
                            <h3>{member.role}</h3>
                            <p>{member.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AboutUs;
