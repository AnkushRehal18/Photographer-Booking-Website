import React from  "react";
import '../components/filecss.css'

function Footer(){
    return(
        <>
        <footer class="footer">
    <div class="footer-container">
        <div class="footer-navigation">
            <ul>
                <li><a href="#home" class="active">Home</a></li>
                <li><a href="#families">Families</a></li>
                <li><a href="#couples">Couples</a></li>
                <li><a href="#proposals">Proposals</a></li>
                <li><a href="#elopements">Elopements</a></li>
                <li><a href="#meet-the-team">Meet The Team</a></li>
                <li><a href="#blog">Blog</a></li>
            </ul>
        </div>
        <div class="footer-form">
            <p>Visit Zion Like a Local - Get Our Free <strong>Zion 101 Guide</strong></p>
            <form action="#">
                <input type="text" placeholder="Name" required/>
                <input type="email" placeholder="Email Address" required/>
                <button type="submit">Get The Free Guide</button>
            </form>
        </div>
    </div>
    <div class="footer-bottom">
        <p>Copyright 2017 Zion Adventure Photog. All Rights Reserved.</p>
        <div class="social-icons">
            {/* place links of socials */}
        </div>
    </div>
</footer>
        </>
    )
}

export default Footer;