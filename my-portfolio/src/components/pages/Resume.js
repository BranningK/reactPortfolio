import '../../styles/Resume.css';

function Resume() {
  return (
    <div className='resumeContainer'>
      <h3 className='heading'>Resume</h3>
      <a className="resumeLink" href=''>Download</a><br></br><br></br>
      <div className='iframeContainer'>
        <iframe className='responsive-iframe' src="https://docs.google.com/document/d/e/2PACX-1vREHX-Ij5w7F_GqNYp7D8JaJBI4isXgisj300xzIu6eehPDFBsYeCSgWb7s9yHvtKepV1aeTR8G49WM/pub?embedded=true"></iframe>
      </div>
      
      <h4>My Skills: </h4>
      <div className='list'>
        <p className='mern'>MERN stack</p>
        <p><b>M</b>ongoDB</p>
        <p><b>E</b>xpressJS</p>
        <p><b>R</b>eactJS</p>
        <p><b>N</b>odeJS</p>
        <p>HTML</p>
        <p>CSS</p>
        <p>Git</p>
        <p>JavaScript</p>
        <p>Bootstrap</p>
        <p>3rd party APIs</p>
        <p>JQuery</p>
        <p>JSON</p>
        <p>Agile Development</p>
        <p>ES6</p>
        <p>MYSQL</p>
        <p>OOP</p>
        <p>MVC</p>
        <p>Sequelize</p>
        <p>Progressive Web Apps (PWAs)</p>
        <p>NoSQL</p>
      </div>
    </div>
  )
}

export default Resume;