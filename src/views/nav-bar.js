import "../App.css"
import {
    FaYoutube,
    FaInstagram,
    FaTwitter,
    FaShoppingCart
  } from "react-icons/fa"; // npm install react-icons --save
import { Link } from "react-scroll"

const SocialShare = [
  { Social: <FaYoutube color='white' size={20}/>, link: "https://www.youtube.com/c/TheCheungBros" },
  { Social: <FaInstagram color='white' size={20}/>, link: "https://www.instagram.com/" },
  { Social: <FaTwitter color='white' size={20}/>, link: "https://twitter.com/" },
  { Social: <FaShoppingCart color='white' size={20}/>, link: "https://www.youtube.com/channel/UCdn5BQ06XqgXoAxIhbqw5Rg?sub_confirmation=1" },
];

const Navbar = (props) => {
  return (
    <>
      <nav className="nav">
        <ul className="nav-menu">
          <li className="site-title">
            <Link to = "home-banner" smooth={true} duration={300} offset={-60} spy={true}> The Cheung Bros. </Link>
          </li>
          <li className="hvr-underline-from-left">
            <Link to = "about" smooth={true} duration={500} offset={-60} spy={true}> About </Link>
          </li>
          <li className="hvr-underline-from-left">
            <Link to = "latest-upload" smooth={true} duration={500} offset={-60} spy={true}> Latest Upload </Link>
          </li>
          <li className="hvr-underline-from-left">
            <Link to = "recommendation" smooth={true} duration={500} offset={-60} spy={true}> Recommendation </Link>
          </li>
          <li className="hvr-underline-from-left">
            <Link to = "contact" smooth={true} duration={500} offset={-60} spy={true}> Contact </Link>
          </li>
        </ul>
        <ul className="social-link">
          {SocialShare.map((val, i) => (
          <li className="hvr-grow" key={i}>
              <a href={`${val.link}`}>{val.Social}</a>
          </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default Navbar;