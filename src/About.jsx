import { Link } from "react-router-dom";



const About = () => {
    return (
        <>
        <div className='about'>
            <img className='img3' src='https://www.freewebheaders.com/wp-content/gallery/cats/lovely-american-shorthair-kitten-website-header.jpg'/>
            <div className="aboutText">
            <h1>About</h1>
            <p>Our cat cafe is a place where you can relax and enjoy the company of cats. Our cats are friendly and love to play. We have a variety of cats to choose from. Our cafe is a great place to meet new people and make new friends. We also have a store where you can purchase cat-themed items. Come visit us today!</p>
            <h4> Each of our cats are from local rescues and are available for adoption.  We partner with local shelters to provide a space for cats to get more exposure to socilization and increase their chance for adoption. </h4>
            <h4>We have a variety of snacks and drinks to choose from, feel free to view our <Link to="/menu">menu! </Link></h4></div>
        </div>
        <div>

        </div>
        </>
    );
}
export default About;