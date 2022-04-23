import React from 'react';
import { FaInstagram } from "react-icons/fa";
import {FaSnapchatGhost} from "react-icons/fa";
import {FaFacebook} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div class="footer-basic">
        <footer>
            <div class="social"><a href="#"><FaInstagram className="icon"/></a><a href="#"><FaSnapchatGhost className="icon"/></a><a href="#"><FaFacebook className="icon"/></a><a href="#"><FaTwitter className="icon"/></a></div>
            <ul class="list-inline">
                <li class="list-inline-item"><Link to="/">Home</Link></li>
                <li class="list-inline-item"><Link to="Property">Services</Link></li>
                <li class="list-inline-item"><a href="#">About</a></li>
                <li class="list-inline-item"><a href="#">Terms</a></li>
                <li class="list-inline-item"><a href="#">Privacy Policy</a></li>
            </ul>
            <p class="copyright">Rest-Inn by KV © 2022</p>
        </footer>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>
    </div>
  );
}

export default Footer;