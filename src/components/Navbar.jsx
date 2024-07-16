import logo from "../assets/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
    return (
        <div>
            <nav className="mb-20 flex items-center justify-between py-6">
                <div className="flex flex-shrink-0 items-center">
                    <img className="mx-2" src={logo} alt="logo" />
                </div>
                <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                    <a href="https://www.linkedin.com/in/yash-nandeshwar-880b18267/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/yash3567" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaSquareXTwitter />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
