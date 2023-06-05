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
        <a href="https://quizz-app-h468.onrender.com" target="_blank" rel="noopener noreferrer">
    <img src={placeholderImage} alt="Placeholder" className="proimage" />
    </a>
          <div className="content">
            <h1 className="projectone">Quizzical</h1>
            <h3 className="projectone">Quizzical is an application I made to test me knowledge of React and managing state.<br/>
            The application uses a simple API to fetch the questions. I store the users selected answers <br/> 
            and the correct answer using state. Then apply conditonal logic based on those selections and render <br/>it on the page.  </h3>
            <h1 className='tech-title-one'>Technologies Used:</h1>
            <h3 className='tech-used-one'>React | Node.js | Javascript | HTML5 | CSS | Axios | Render | HE Decode | Open Trivia DB API</h3>
            <div className="buttonsone">
            <a href="https://github.com/bojeebs/quizzical" target="_blank" rel="noopener noreferrer" className="orange-button no-underline">Github</a>
            <a href="https://quizz-app-h468.onrender.com" target="_blank" rel="noopener noreferrer" className="orange-button">View Project</a>
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