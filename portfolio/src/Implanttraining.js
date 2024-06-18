import React from 'react';
import './Implanttraining.css';
import cnc from '../src/Assets/cnc.png'
import office from '../src/Assets/office.png'
import forging from '../src/Assets/forging.png'

function Implanttraining() {
  return (
    <section id='implantraining'>
      <div className="train-container">
        <h1>Implant Training</h1>
        <div className="Accounts">
          <div className="train-box">
            <h3>Accounts</h3>
            <p>
              I gained valuable experience working in the accounts section. During my time there,
              I learned how to efficiently organize billing files and manage the billing process using computer systems.
              This hands-on experience enhanced my understanding of accounting procedures and improved my organizational skills.
            </p>
          </div>
          <div className="separator"></div>
          <div className="train-box">
            <img src={office} alt="Accounts" className="responsive-image" />
          </div>
        </div>
        <div className="Production">
          <div className="train-box">
            <img src={forging} alt="Production" className="responsive-image" />
          </div>
          <div className="separator"></div>
          <div className="train-box">
            <h3>Production</h3>
            <p>
              I participated in an implant training program at a metal parts manufacturing company,
              where I worked in the production department. During my time there,
              I observed and learned about the use of CNC (Computer Numerical Control) and VMC (Vertical Machining Center) machines.
              The company specializes in producing components such as brake pedals and petrol bunk parts.
              This experience provided me with valuable insights into advanced manufacturing processes and precision engineering.
            </p>
          </div>
        </div>
        <div className="Quality">
          <div className="train-box">
            <h3>Quality</h3>
            <p>
              During my time at the company, I worked in the quality inspection department.
              This department is responsible for ensuring that all manufactured products meet the required quality standards and specifications.
              My role involved examining and testing products such as brake pedals and petrol bunk components to identify any defects
              or inconsistencies. I learned how to use various inspection tools and techniques to measure dimensions, assess material
              properties, and verify the overall quality of the products. This experience enhanced my attention to detail and understanding of
              quality control processes, which are critical for maintaining high standards in manufacturing.
            </p>
          </div>
          <div className="separator"></div>
          <div className="train-box">
            <img src={cnc} alt="Quality" className="responsive-image" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Implanttraining;
