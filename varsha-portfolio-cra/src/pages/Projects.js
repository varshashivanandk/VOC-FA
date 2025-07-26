import React from 'react';

const Projects = () => (
  <section id="projects" className="card">
    <h2>Projects</h2>
    <ul>
      <li>
        <div className="container">
          <h3>🛒 ShopCart E-commerce Website</h3><br />
          <span>
            ShopCart is a Frontend E-Commerce website built using HTML, CSS, and JavaScript. It provides a complete shopping experience with:<br />
            ~ A homepage featuring a banner, product listing with category filters, and customer reviews<br />
            ~ A cart page that dynamically displays items added using localStorage and calculates the total<br />
            ~ An about/contact page sharing the brand’s story, vision, and support details<br />
            ~ A review form where users can submit feedback in real-time<br />
            <b>Link:</b> <a href="https://github.com/varshashivanandk/ShopCart--E-COMMERCE-WEBSITE">ShopCart GitHub Repo</a>
          </span>
        </div>
      </li>
      <li>
        <div className="container">
          <h3>🕵️‍♀️ Crime Records Management System</h3><br />
          <span>
            The Crime Records Management System is a full-stack web application designed to help manage and organize crime-related data efficiently.<br />
            Built using HTML, CSS, JavaScript (frontend), Node.js and Express (backend), and MySQL (database).<br />
            Key Features:<br />
            ~ User authentication<br />
            ~ Dashboard views<br />
            ~ Full CRUD<br />
            ~ Entity relationships<br />
            ~ API integration using fetch<br />
            <b>Link:</b> <a href="https://github.com/tharunm490/dbmsproject2">Crime Records GitHub Repo</a>
          </span>
        </div>
      </li>
    </ul>
  </section>
);

export default Projects;
