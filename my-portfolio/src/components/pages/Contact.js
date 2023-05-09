

function Contact() {
  return (
    <div className='contactContainer'>
      <h3 className="contact">Contact Me!</h3>
      <label className="contactHeader" for="name">Name: </label>
        <input className="textbox" placeholder="Name" required autoFocus></input>
      <label className="contactHeader" for="email">Email:</label>
        <input className="textbox" placeholder="example@email.com" type="email" required></input>
      <label className="contactHeader" for="message">Message:</label>
        <input className="messageBox textbox" placeholder="Your message here!"></input>
      <input className="submitButton" type="submit" value="Send"></input>
    </div>
  )
}

export default Contact;