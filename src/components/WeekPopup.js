import React from 'react';
import './WeekPopup.css';

const WeekPopup = ({ course, week, onClose }) => {
  let content = '';

  if (course === 'Design and Implementation of Human-Computer Interfaces') {
    switch (week) {
      case 'Week 1':
        content = (
          <ul>
            {/* Add more items as needed */}
          </ul>
        );
        break;
      case 'Week 2':
        content = (
          <ul>
            <li>Week 2 - Topic A</li>
            <li>Week 2 - Topic B</li>
            <li>Week 2 - Topic C</li>
            {/* Add more items as needed */}
          </ul>
        );
        break;
      case 'Week 3':
        content = (
          <ul>
            <li>Week 3 - Topic A</li>
            <li>Week 3 - Topic B</li>
            <li>Week 3 - Topic C</li>
            {/* Add more items as needed */}
          </ul>
        );
        break;
      case 'Week 4':
        content = (
          <ol>
            <li>a. actions</li>
            <li>c. To test the system's usability with respect to the end users</li>
            <li>b. To make the system easier to learn and use</li>
            <li>a. Gulf of execution</li>
            <li>b. mistakes</li>
            <li>c. evaluation</li>
            <li>a. True</li>
            <li>a. True</li>
            <li>a. Low fidelity</li>
            <li>c. Wizard of Oz</li>
            {/* Add more items as needed */}
          </ol>
        );
        break;
      case 'Week 5':
        content = (
          <ul>
            <li>Week 5 - Topic A</li>
            <li>Week 5 - Topic B</li>
            <li>Week 5 - Topic C</li>
            {/* Add more items as needed */}
          </ul>
        );
        break;
      case 'Week 6':
        content = (
          <ul>
            <li>Week 6 - Topic A</li>
            <li>Week 6 - Topic B</li>
            <li>Week 6 - Topic C</li>
            {/* Add more items as needed */}
          </ul>
        );
        break;
      case 'Week 7':
        content = (
          <ul>
            <li>Week 7 - Topic A</li>
            <li>Week 7 - Topic B</li>
            <li>Week 7 - Topic C</li>
            {/* Add more items as needed */}
          </ul>
        );
        break;
      case 'Week 8':
        content = (
          <ul>
            <li>Week 8 - Topic A</li>
            <li>Week 8 - Topic B</li>
            <li>Week 8 - Topic C</li>
            {/* Add more items as needed */}
          </ul>
        );
        break;
      case 'Week 9':
        content = (
          <ul>
            <li>Week 9 - Topic A</li>
            <li>Week 9 - Topic B</li>
            <li>Week 9 - Topic C</li>
            {/* Add more items as needed */}
          </ul>
        );
        break;
      case 'Week 10':
        content = (
          <ul>
            <li>Week 10 - Topic A</li>
            <li>Week 10 - Topic B</li>
            <li>Week 10 - Topic C</li>
            {/* Add more items as needed */}
          </ul>
        );
        break;
      case 'Week 11':
        content = (
          <ul>
            <li>Week 11 - Topic A</li>
            <li>Week 11 - Topic B</li>
            <li>Week 11 - Topic C</li>
            {/* Add more items as needed */}
          </ul>
        );
        break;
      case 'Week 12':
        content = (
          <ul>
            <li>Week 12 - Topic A</li>
            <li>Week 12 - Topic B</li>
            <li>Week 12 - Topic C</li>
            <li>Week 12 - Topic D</li>
            <li>Week 12 - Topic E</li>
            <li>Week 12 - Topic F</li>
            <li>Week 12 - Topic G</li>
            <li>Week 12 - Topic H</li>
            <li>Week 12 - Topic I</li>
            <li>Week 12 - Topic J</li>
            <li>Week 12 - Topic K</li>
            <li>Week 12 - Topic L</li>
            {/* Add more items as needed */}
          </ul>
        );
        break;
      default:
        content = `Content for ${week}...`;
        break;
    }
  } else if (course === 'Psychology of Learning') {
    switch (week) {
      case 'Week 1':
        content = (
          <ul>
            <li>Course 2 - Week 1 - Topic A</li>
            <li>Course 2 - Week 1 - Topic B</li>
            <li>Course 2 - Week 1 - Topic C</li>
            {/* Add more items as needed */}
          </ul>
        );
        break;
      case 'Week 2':
        content = (
          <ul>
            <li>Course 2 - Week 2 - Topic A</li>
            <li>Course 2 - Week 2 - Topic B</li>
            <li>Course 2 - Week 2 - Topic C</li>
            {/* Add more items as needed */}
          </ul>
        );
        break;
      case 'Week 3':
        content = (
          <ul>
            <li>Course 2 - Week 3 - Topic A</li>
            <li>Course 2 - Week 3 - Topic B</li>
            <li>Course 2 - Week 3 - Topic C</li>
            {/* Add more items as needed */}
          </ul>
        );
        break;
      case 'Week 4':
        content = (
          <ul>
            <li>D. convergent</li>
            <li>C. symbolic</li>
            <li>D. all of the given</li>
            <li>C. “aha”</li>
            <li>A. factual</li>
            <li>E. Metacognition</li>
            <li>D. avoiding reflective discussions</li>
            <li>B. It is not a skill anybody can develop</li>
            <li>A. insight</li>
            <li>D. proposition</li>
            {/* Add more items as needed */}
          </ul>
        );
        break;
      case 'Week 5':
        content = (
          <ul>
            <li>Course 2 - Week 5 - Topic A</li>
            <li>Course 2 - Week 5 - Topic B</li>
            <li>Course 2 - Week 5 - Topic C</li>
            {/* Add more items as needed */}
          </ul>
        );
        break;
      case 'Week 6':
        content = (
          <ul>
            <li>Course 2 - Week 6 - Topic A</li>
            <li>Course 2 - Week 6 - Topic B</li>
            <li>Course 2 - Week 6 - Topic C</li>
            {/* Add more items as needed */}
          </ul>
        );
        break;
      case 'Week 7':
        content = (
          <ul>
            <li>Course 2 - Week 7 - Topic A</li>
            <li>Course 2 - Week 7 - Topic B</li>
            <li>Course 2 - Week 7 - Topic C</li>
            {/* Add more items as needed */}
          </ul>
        );
        break;
      case 'Week 8':
        content = (
          <ul>
            <li>Course 2 - Week 8 - Topic A</li>
            <li>Course 2 - Week 8 - Topic B</li>
            <li>Course 2 - Week 8 - Topic C</li>
            {/* Add more items as needed */}
          </ul>
        );
        break;
      case 'Week 9':
        content = (
          <ul>
            <li>Course 2 - Week 9 - Topic A</li>
            <li>Course 2 - Week 9 - Topic B</li>
            <li>Course 2 - Week 9 - Topic C</li>
            {/* Add more items as needed */}
          </ul>
        );
        break;
      case 'Week 10':
        content = (
          <ul>
            <li>Course 2 - Week 10 - Topic A</li>
            <li>Course 2 - Week 10 - Topic B</li>
            <li>Course 2 - Week 10 - Topic C</li>
            {/* Add more items as needed */}
          </ul>
        );
        break;
      case 'Week 11':
        content = (
          <ul>
            <li>Course 2 - Week 11 - Topic A</li>
            <li>Course 2 - Week 11 - Topic B</li>
            <li>Course 2 - Week 11 - Topic C</li>
            {/* Add more items as needed */}
          </ul>
        );
        break;
      case 'Week 12':
        content = (
          <ul>
            <li>Course 2 - Week 12 - Topic A</li>
            <li>Course 2 - Week 12 - Topic B</li>
            <li>Course 2 - Week 12 - Topic C</li>
            <li>Course 2 - Week 12 - Topic D</li>
            <li>Course 2 - Week 12 - Topic E</li>
            <li>Course 2 - Week 12 - Topic F</li>
            <li>Course 2 - Week 12 - Topic G</li>
            <li>Course 2 - Week 12 - Topic H</li>
            <li>Course 2 - Week 12 - Topic I</li>
            <li>Course 2 - Week 12 - Topic J</li>
            <li>Course 2 - Week 12 - Topic K</li>
            <li>Course 2 - Week 12 - Topic L</li>
            {/* Add more items as needed */}
          </ul>
        );
        break;
      default:
        content = `Content for ${week}...`;
        break;
    }
  } else if (course === 'Sociology of Development') {
    switch (week) {
      case 'Week 1':
        content = (
          <ul>
            <li>Course 3 - Week 1 - Topic A</li>
            <li>Course 3 - Week 1 - Topic B</li>
            <li>Course 3 - Week 1 - Topic C</li>
            {/* Add more items as needed */}
          </ul>
        );
        break;
      case 'Week 2':
        content = (
          <ul>
            <li>Course 3 - Week 2 - Topic A</li>
            <li>Course 3 - Week 2 - Topic B</li>
            <li>Course 3 - Week 2 - Topic C</li>
            {/* Add more items as needed */}
          </ul>
        );
        break;
      case 'Week 3':
        content = (
          <ul>
            <li>Course 3 - Week 3 - Topic A</li>
            <li>Course 3 - Week 3 - Topic B</li>
            <li>Course 3 - Week 3 - Topic C</li>
            {/* Add more items as needed */}
          </ul>
        );
        break;
      case 'Week 4':
        content = (
          <ul>
            <li>1. (c) Ethnocentrism</li>
            <li>2. (b) Neo-Marxism</li>
            <li>3. (d) All of these</li>
            <li>4. (d) All of these</li>
            <li>5. (a) Ideological, Empirical, and Methodological or Metatheoretical</li>
            <li>6. (c) Modernization</li>
            <li>7. (d) Hamza Alavi</li>
            <li>8. (d) Raul Prebisch</li>
            {/* Add more items as needed */}
          </ul>
        );
        break;
      case 'Week 5':
        content = (
          <ul>
            <li>Course 3 - Week 5 - Topic A</li>
            <li>Course 3 - Week 5 - Topic B</li>
            <li>Course 3 - Week 5 - Topic C</li>
            {/* Add more items as needed */}
          </ul>
        );
        break;
      case 'Week 6':
        content = (
          <ul>
            <li>Course 3 - Week 6 - Topic A</li>
            <li>Course 3 - Week 6 - Topic B</li>
            <li>Course 3 - Week 6 - Topic C</li>
            {/* Add more items as needed */}
          </ul>
        );
        break;
      case 'Week 7':
        content = (
          <ul>
            <li>Course 3 - Week 7 - Topic A</li>
            <li>Course 3 - Week 7 - Topic B</li>
            <li>Course 3 - Week 7 - Topic C</li>
            {/* Add more items as needed */}
          </ul>
        );
        break;
      case 'Week 8':
        content = (
          <ul>
            <li>Course 3 - Week 8 - Topic A</li>
            <li>Course 3 - Week 8 - Topic B</li>
            <li>Course 3 - Week 8 - Topic C</li>
            {/* Add more items as needed */}
          </ul>
        );
        break;
      case 'Week 9':
        content = (
          <ul>
            <li>Course 3 - Week 9 - Topic A</li>
            <li>Course 3 - Week 9 - Topic B</li>
            <li>Course 3 - Week 9 - Topic C</li>
            {/* Add more items as needed */}
          </ul>
        );
        break;
      case 'Week 10':
        content = (
          <ul>
            <li>Course 3 - Week 10 - Topic A</li>
            <li>Course 3 - Week 10 - Topic B</li>
            <li>Course 3 - Week 10 - Topic C</li>
            {/* Add more items as needed */}
          </ul>
        );
        break;
      case 'Week 11':
        content = (
          <ul>
            <li>Course 3 - Week 11 - Topic A</li>
            <li>Course 3 - Week 11 - Topic B</li>
            <li>Course 3 - Week 11 - Topic C</li>
            {/* Add more items as needed */}
          </ul>
        );
        break;
      case 'Week 12':
        content = (
          <ul>
            <li>Course 3 - Week 12 - Topic A</li>
            <li>Course 3 - Week 12 - Topic B</li>
            <li>Course 3 - Week 12 - Topic C</li>
            <li>Course 3 - Week 12 - Topic D</li>
            <li>Course 3 - Week 12 - Topic E</li>
            <li>Course 3 - Week 12 - Topic F</li>
            <li>Course 3 - Week 12 - Topic G</li>
            <li>Course 3 - Week 12 - Topic H</li>
            <li>Course 3 - Week 12 - Topic I</li>
            <li>Course 3 - Week 12 - Topic J</li>
            <li>Course 3 - Week 12 - Topic K</li>
            <li>Course 3 - Week 12 - Topic L</li>
            {/* Add more items as needed */}
          </ul>
        );
        break;
      default:
        content = `Content for ${week}...`;
        break;
    }
  } else if (course === '4.0') {
    switch (week) {
      case 'Week 1':
        content = (
          <ul>
            <li>Course 3 - Week 1 - Topic A</li>
            <li>Course 3 - Week 1 - Topic B</li>
            <li>Course 3 - Week 1 - Topic C</li>
            {/* Add more items as needed */}
          </ul>
        );
        break;
      case 'Week 2':
        content = (
          <ul>
            <li>Course 3 - Week 2 - Topic A</li>
            <li>Course 3 - Week 2 - Topic B</li>
            <li>Course 3 - Week 2 - Topic C</li>
            {/* Add more items as needed */}
          </ul>
        );
        break;
      case 'Week 3':
        content = (
          <ul>
            <li>Course 3 - Week 3 - Topic A</li>
            <li>Course 3 - Week 3 - Topic B</li>
            <li>Course 3 - Week 3 - Topic C</li>
            {/* Add more items as needed */}
          </ul>
        );
        break;
      case 'Week 4':
        content = (
          <ul>
            <li>a. hello vamsi</li>
            <li>Course 3 - Week 4 - Topic B</li>
            <li>Course 3 - Week 4 - Topic C</li>
            {/* Add more items as needed */}
          </ul>
        );
        break;
      case 'Week 5':
        content = (
          <ul>
            <li>Course 3 - Week 5 - Topic A</li>
            <li>Course 3 - Week 5 - Topic B</li>
            <li>Course 3 - Week 5 - Topic C</li>
            {/* Add more items as needed */}
          </ul>
        );
        break;
      case 'Week 6':
        content = (
          <ul>
            <li>Course 3 - Week 6 - Topic A</li>
            <li>Course 3 - Week 6 - Topic B</li>
            <li>Course 3 - Week 6 - Topic C</li>
            {/* Add more items as needed */}
          </ul>
        );
        break;
      case 'Week 7':
        content = (
          <ul>
            <li>Course 3 - Week 7 - Topic A</li>
            <li>Course 3 - Week 7 - Topic B</li>
            <li>Course 3 - Week 7 - Topic C</li>
            {/* Add more items as needed */}
          </ul>
        );
        break;
      case 'Week 8':
        content = (
          <ul>
            <li>Course 3 - Week 8 - Topic A</li>
            <li>Course 3 - Week 8 - Topic B</li>
            <li>Course 3 - Week 8 - Topic C</li>
            {/* Add more items as needed */}
          </ul>
        );
        break;
      case 'Week 9':
        content = (
          <ul>
            <li>Course 3 - Week 9 - Topic A</li>
            <li>Course 3 - Week 9 - Topic B</li>
            <li>Course 3 - Week 9 - Topic C</li>
            {/* Add more items as needed */}
          </ul>
        );
        break;
      case 'Week 10':
        content = (
          <ul>
            <li>Course 3 - Week 10 - Topic A</li>
            <li>Course 3 - Week 10 - Topic B</li>
            <li>Course 3 - Week 10 - Topic C</li>
            {/* Add more items as needed */}
          </ul>
        );
        break;
      case 'Week 11':
        content = (
          <ul>
            <li>Course 3 - Week 11 - Topic A</li>
            <li>Course 3 - Week 11 - Topic B</li>
            <li>Course 3 - Week 11 - Topic C</li>
            {/* Add more items as needed */}
          </ul>
        );
        break;
      case 'Week 12':
        content = (
          <ul>
            <li>Course 3 - Week 12 - Topic A</li>
            <li>Course 3 - Week 12 - Topic B</li>
            <li>Course 3 - Week 12 - Topic C</li>
            <li>Course 3 - Week 12 - Topic D</li>
            <li>Course 3 - Week 12 - Topic E</li>
            <li>Course 3 - Week 12 - Topic F</li>
            <li>Course 3 - Week 12 - Topic G</li>
            <li>Course 3 - Week 12 - Topic H</li>
            <li>Course 3 - Week 12 - Topic I</li>
            <li>Course 3 - Week 12 - Topic J</li>
            <li>Course 3 - Week 12 - Topic K</li>
            <li>Course 3 - Week 12 - Topic L</li>
            {/* Add more items as needed */}
          </ul>
        );
        break;
      default:
        content = `Content for ${week}...`;
        break;
    }
  } else {
    content = `Content for ${course}...`;
  }

  return (
    <div className="week-popup">
      <div className="week-popup-content">
        <span className="week-popup-close" onClick={onClose}>&times;</span>
        <h2>{course} - {week}</h2>
        <div className="week-popup-body">
          {content}
        </div>
      </div>
    </div>
  );
};

export default WeekPopup;
