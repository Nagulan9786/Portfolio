import React from 'react'
import './About.css'
import resume from '../src/Assets/Nagulan Resume.pdf'
const About = () => {
  return (
    <section id="about">
    <div>
      <div className="about">
        <div className="box">
      <h1 className='habout'>About Me</h1>
      <p>Dedicated and ambitious student pursuing a Bachelor's degree in
Mechatronics at Sri Krishna College of Engineering and Technology.Passionate about coding and love working on frontend projects.Eager to
contribute my skills and knowledge in software Industry.</p>
<p>nagulanuc@gmail.com | +91 9487680930</p>
<a href={resume} download='Resume'><button className='button'>Resume</button></a>
</div>
    </div>

    </div>
</section>
  )
}

export default About
