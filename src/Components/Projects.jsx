import placeholderImage from '../images/placeholder.jpeg';





const Projects = () => {









  return (
    <div className="project-div" id="projects">
      <div className="center">
        <h1>Projects</h1>
      </div>
      <div className="container-wrapper">
        <div className="container">
          <img src={placeholderImage} alt="Placeholder" className="proimage" />
          <div className="content">
            <h1>Title</h1>
            <h3>Body</h3>
            <div className="buttons">
              <button className="orange-button">Github</button>
              <button className="orange-button">View Project</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{ flexDirection: "row-reverse" }}>
        <div>
          <img src={placeholderImage} alt="Placeholder" className="proimage" />
        </div>
        <div className="content">
          <h1>Title</h1>
          <h3>Body</h3>
          <div className="buttons">
            <button className="orange-button">Github</button>
            <button className="orange-button">View Project</button>
          </div>
        </div>
      </div>

      <div className="container">
        <img src={placeholderImage} alt="Placeholder" className="proimage" />
        <div className="content">
          <h1>Title</h1>
          <h3>Body</h3>
          <div className="buttons">
            <button className="orange-button">Github</button>
            <button className="orange-button">View Project</button>
          </div>
        </div>
      </div>
    </div>
  );
  
  
}

export default Projects