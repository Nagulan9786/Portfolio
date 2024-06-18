import React from 'react'
import './Project.css'
import prj from '../src/Assets/prjpdf.pdf';

function Projects() {
  return (
    <section id="projects">
      <div className="project-container">
      <h1 className="prjh1">Projects 👉</h1>
        <div className="project">
          <h3>Turf Connect</h3>
          <p>The Turf Booking Frontend Web App is a user-friendly platform for reserving sports fields. It features a clean design, easy navigation, real-time availability, and secure booking in just a few clicks. Perfect for quick and convenient field reservations.</p>
          <a href='https://github.com/Nagulan9786/TurfConnect'>
            <button className="read-more">Github Link</button>
          </a>
        </div>
        <div className="project">
          <h3>Smart Water Management System</h3>
          <p>Developed a Smart Water Management System with solenoid valves, sensors, an ESP32, and a Blink app. Designed and integrated components, enabling real-time monitoring of water flow and tank levels. Optimized system performance through effective troubleshooting.</p>
          <a href={prj} download='smart water management system report'>
            <button className="read-more">Read More</button>
          </a>
        </div>
        <div className="project">
          <h3>Weather app</h3>
          <p>Developed a user-friendly single-page web application utilizing React, CSS, and a weather API. Employs an input box to accept user-entered city names, providing real-time weather data including temperature in Fahrenheit, city name, country, latitude, and longitude. Demonstrated proficiency in front-end development, API integration, and user interaction design.</p>
          <a href='https://github.com/Nagulan9786/Weather-app'>
            <button className="read-more">Github Link</button>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
