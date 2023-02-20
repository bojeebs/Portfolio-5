import { Route, Routes } from "react-router-dom"
import Projects from './Projects'
import Aboutme from './Aboutme'
import Resume from './Resume'


const Home = () => {
  return (
    <div className="Main">
      <h2 className="h1">My name is <span className="cool-text">Tyler Carter</span></h2>
      <h2 className="h1">and I build imaginative </h2>
      <h2 className="h1"><span className="cool-text">Websites</span> and <span className="cool-text">Applications</span></h2>
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Aboutme" element={<Aboutme />} />
        <Route path="/Resume" element={<Resume />} />
      </Routes> */}
    </div>
  );
}
export default Home