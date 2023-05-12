import placeholderImage from '../images/catsproject.png'
import placeholderImage2 from '../images/steamclone.png'





const Projects = () => {









  return (
    <div className="project-div" id="projects">
      <div className="center">
        <h1>Projects</h1>
      </div>
      <div className="container-wrapper">
        <div className="container">
        <a href="https://catfinder-43i8.onrender.com" target="_blank" rel="noopener noreferrer">
    <img src={placeholderImage} alt="Placeholder" className="proimage" />
    </a>
          <div className="content">
            <h1 className="projectone">Cats</h1>
            <h3 className="projectone">Cats was my first react project and pulls in a 3rd party api with cat breeds, images,<br/> and other cat information.
            Each cat is clickable and provides a small amount of detail <br/> on each cat and ranks their attributes. You can also cycle through each cat using <br/> 
            the next and previous buttons instead of going back to the home page. </h3>
            <div className="buttonsone">
            <a href="https://github.com/bojeebs/Cats" target="_blank" rel="noopener noreferrer" className="orange-button no-underline">Github</a>
            <a href="https://catfinder-43i8.onrender.com" target="_blank" rel="noopener noreferrer" className="orange-button">View Project</a>
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{ flexDirection: "row-reverse" }}>
        <div>
        <a href="https://example.com" target="_blank" rel="noopener noreferrer">
          <img src={placeholderImage2} alt="Placeholder" className="proimage" />
        </a>
        </div>
        <div className="content">
          <h1 className="projecttwo">Steam Clone</h1>
          <h3 className="projecttwo">Body</h3>
          <div className="buttonstwo">
            <button className="orange-button">Github</button>
            <button className="orange-button">View Project</button>
          </div>
        </div>
      </div>

      {/* <div className="container">
        <img src={placeholderImage} alt="Placeholder" className="proimage" />
        <div className="content">
          <h1>Title</h1>
          <h3>Body</h3>
          <div className="buttonsthree">
            <button className="orange-button">Github</button>
            <button className="orange-button">View Project</button>
          </div>
        </div>
      </div> */}
    </div>
  );
  
  
}

export default Projects