function Contact() {
  return (
    <div className="contactBox">
      <div className="grid1">
      <h1>Contact</h1>
      <p>Send us a message!</p>
      <input type="text" placeholder="Name" />
      <br/>
   
      <input type="text" placeholder="Email" />
      <br/>
      <textarea placeholder="Message"></textarea>
    <br/>
      <button>Submit</button>
      </div>
      <div className="grid2">
        <h1>Our contact Info</h1>
        <p>Address: 1234 Cat Cafe Lane</p>
        <p>Phone: 123-456-7890</p>
        <p>Email: catcafe@gmail.com</p>
      
      
      </div>
    </div>
  );
}

export default Contact;