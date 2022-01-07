import React from 'react'
import Appstore from "../../../images/Appstore.png";
import playstore from "../../../images/playstore.png";
import "./Footer.css"

const Footer = () => {
    return (
        <footer id="footer">
            <div className="leftFooter">
                <h4>DOWNLOAD OUR APP</h4>
                <p>Download our app and android and iphone</p>
                <img src={playstore} alt="playstore" />
                <img src={Appstore} alt="Appstore" />
            </div>

            <div className="midFooter">
                <h1>Eccomerce</h1>
                <p>High quality is our priority</p>
                <p>Copyrights 2021 &copy; Persistent Systems Ltd</p>
            </div>

            <div className="rightFooter">
                <h4>Follow Us</h4>
                <a href="http://instagram.com/meabhisingh">Instagram</a>
                <a href="https://www.youtube.com/watch?v=AN3t-OmdyKA&t=11542s">Youtube</a>
                <a href="http://instagram.com/meabhisingh">Facebook</a>
            </div>
        </footer>
    )
}

export default Footer
