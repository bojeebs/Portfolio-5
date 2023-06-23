import placeholderImage from '../images/catsproject.png'
import placeholderImage2 from '../images/steamclone.png'
import placeholderImage3 from '../images/tickit.png'




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
            <h3 className="projectone">Quizzical is an application I made to test my knowledge of React <br/>and managing state.
            The application uses a simple API to fetch <br/>the questions. I store the users selected answers  
            and the correct <br/>answer using state. Then apply conditonal logic based on those <br/>selections and render it on the page. </h3>
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
        <a href="https://simplesteam-react.onrender.com" target="_blank" rel="noopener noreferrer">
          <img src={placeholderImage2} alt="Placeholder" className="proimage" />
        </a>
        </div>
        <div className="content">
          <h1 className="projecttwo">Steam Clone</h1>
          <h3 className="projecttwo">This is a clone application I helped design as a team project during<br/> my bootcamp. The project has full CRUD
          and renders data condtionally <br/> depending on whether or not the user is logged in. User can add games <br/> to their wishlists and remove them.
          We utilized 3rd party api's to populate <br/> our database intially then mapped through those results to display them. </h3>
          <h1 className='tech-title-two'>Technologies Used:</h1>
          <h3 className='tech-used-two'>React | Node.js | Javascript | HTML5 | CSS | Axios | Render | Auth |<br/> Steam API | Sequelize | Postgresql 
          | SQL | </h3>

          <div className="buttonstwo">
          <a href="https://github.com/bojeebs/SimpleSteam-1" target="_blank" rel="noopener noreferrer">
            <button className="orange-button">Github</button>
          </a>
          <a href="https://simplesteam-react.onrender.com" target="_blank" rel="noopener noreferrer">
            <button className="orange-button">View Project</button>
          </a>
          </div>
        </div>
        
      </div>
      <div className="container-wrapper">
        <div className="container">
        <a href="https://github.com/bojeebs/tickit_app_frontend" target="_blank" rel="noopener noreferrer">
    <img src={placeholderImage3} alt="Placeholder" className="proimage" />
    </a>
          <div className="content">
            <h1 className="projectone">Tickit</h1>
            <h3 className="projectone">Tickit is a Ticketmaster clone that allows users to browse their <br/>favorite venue and purchase tickets. 
            The team used figma for <br/> wireframing and design. Utilized bootstrap for forms and modal. <br/>
            and implemented a search bar for easy searching. My main contribution <br/> was the checkout form/modal, input on design, home page and the footer <br/>
            Site is currently not live but please check out my github! </h3>
            <h1 className='tech-title-one'>Technologies Used:</h1>
            <h3 className='tech-used-one'>React | Javascript | HTML5 | CSS | CRUD | Render | Django | Bootstrap | Figma | Trello<br/></h3>
            <div className="buttonsone">
            <a href="https://github.com/bojeebs/tickit_app_frontend" target="_blank" rel="noopener noreferrer" className="orange-button no-underline">Github Frontend</a>
            <a href="https://github.com/bojeebs/tickit_app_backend" target="_blank" rel="noopener noreferrer" className="orange-button">Github Backend</a>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
  
  
}

export default Projects