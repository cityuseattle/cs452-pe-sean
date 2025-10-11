// src/Resume.js
import './Resume.css';

function Resume() {
  return (
    <div className="resume-container">
      <h1>Sean A. La Brake</h1>
      <p>123 Main Street, Marysville, WA 98270 | (425) 931-6636 | hylndre1@cityuniversity.edu</p>

      <h2>Education</h2>
      <h3>Bachelor of Science in Information Systems</h3>
      <p>City University of Seattle, Seattle, WA | In-progress</p>
      <p>GPA: 3.9/4.0</p>

     
      <h2>Skills</h2>
      <p>Archery 101: William Tell, Pin Cusion, Cupid, Broken Arrow, Busted Bow</p>
      <p>Ladder Ball: Set up, Warm up, toss styles, Game rules</p>
      <p>Horse Shoe: Set Up, warm up, toss styles, gsame rules</p>
      <p>Dog Walking: Proper harness, Socializing, Curbing your dog, cleaning up after dog, how to walk your dog</p>
      <p>Version control: Git</p>

      <h2>Work Experience</h2>
      <h3>Compliance</h3>
      <p>Boeing, Everett, WA | May 1997 – Present</p>
      <ul>
        <li>Mechanic</li>
        <li>Instructor</li>
        <li>Analytics</li>
      </ul>

     
      <h2>Projects</h2>
      <h3>Personal Website</h3>
      <p>Built a personal website using React and deployed it on GitHub Pages</p>
      <p>Source code: <a href="https://github.com/studentname/personal-website">github.com/studentname/personal-website</a></p>


    </div>
  );
}

export default Resume;

