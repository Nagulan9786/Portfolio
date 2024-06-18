import React from 'react'
import './Skills.css'

function Skills() {
  return (
    <section id="skills">
      <div className='skillscon'>
        <h1>Skills</h1>
        <div className="container">
          <div className="card">
            <h2>HARD SKILLS</h2>
            <ul>
              <li>Java</li>
              <li>SQL</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>React JS</li>
              <li>LabView</li>
            </ul>
          </div>
          <div className="card">
            <h2>SOFT SKILLS</h2>
            <ul>
              <li>Observation</li>
              <li>Decision Making</li>
              <li>Multitasking</li>
              <li>Communication</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
